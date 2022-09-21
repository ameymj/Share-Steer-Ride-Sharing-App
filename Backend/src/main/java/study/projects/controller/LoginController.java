package study.projects.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.sql.Blob;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;

import study.projects.entity.ImageUpload;
import study.projects.entity.User;


@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
@JsonAutoDetect(fieldVisibility = Visibility.ANY)
public class LoginController {

	@Autowired
	JdbcTemplate temp;

	@PostMapping("/signup")
	public int f3(@RequestBody User u)
	{
		int id=0;
		try {
			temp.update("insert into user (user_name,password,first_name,last_name,birth_date,gender,email_id,contact,is_verified) values(?,?,?,?,?,?,?,?,?)",u.getUser_name(),u.getPassword(),u.getFirst_name(),
					u.getLast_name(),u.getBirth_date(),u.getGender(),u.getEmail_id(),u.getContact(),u.isIs_varified());
			id=temp.queryForObject("select user_id from user where user_name='"+u.getUser_name()+"'",Integer.class);
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return id;
	}

	@GetMapping("/getDetail/{username}")
	public User f5(@PathVariable String username)
	{
		User user=null;
		try {
			user = temp.queryForObject("select * from user where user_name="+username, (rs,rownum)->{return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return user;
	}

	
	@GetMapping("/getdetailsbyid/{user_id}")
	public User f6(@PathVariable int user_id)
	{
		User user=null;
		try {
			user = temp.queryForObject("select * from user where user_id="+user_id, (rs,rownum)->{return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return user;
	}
	
	
	@GetMapping("/getAllUsers")
	public ArrayList<User> f6()
	{
		List<User> list=new ArrayList<User>();
		try {
			list = temp.query("select * from user",(rs,rownum)->{return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return (ArrayList<User>) list;
	}


	@PostMapping("/updateprofile")
	public String f4(@RequestBody User u)
	{
		String messege="";
		if(u==null)
			return "Enter Valid data";
		try {
			temp.update("update user set password='"+u.getPassword()+"',first_name='"+u.getFirst_name()+"', last_name='"+u.getLast_name()+" ',birth_date='"+u.getBirth_date()+"',gender='"+u.getGender()+"',contact='"+u.getContact()+"' where user_name= '"+u.getUser_name()+"'");
			messege="User Update successfully";

		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			messege="Query Failed"+e.getMessage();

			e.printStackTrace();
		}

		return messege;
	}

	@PostMapping("/forgetpassword")
	public String f5(@RequestBody User u)
	{
		String messege="";
		if(u==null)
			return "Enter Valid data";
		try {
			int row=temp.update("update user set password='"+u.getPassword()+"' where user_name='"+u.getUser_name()+"' and email_id='"+u.getEmail_id()+"'");
			if(row>0)
			messege="Password Changed Successfully";
			else
				messege="Invalid Username Or Email";

		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			messege="Query Failed"+e.getMessage();

			e.printStackTrace();
		}

		return messege;
	}
	
//	private static final Logger logger = Logger.getLogger(LoginController.class.getName());

	@PostMapping("/upload")
	public String uploadData(@RequestParam("file") MultipartFile file,@RequestParam("id") int id) throws Exception {
		if (file == null) {
			throw new RuntimeException("You must select the a file for uploading");
		}
		InputStream inputStream = file.getInputStream();
//		String originalName = file.getOriginalFilename();
//		String name = file.getName();
//		String contentType = file.getContentType();
//		long size = file.getSize();
//		logger.info("inputStream: " + inputStream);
//		logger.info("originalName: " + originalName);
//		logger.info("name: " + name);
//		logger.info("contentType: " + contentType);
//		logger.info("size: " + size);
		temp.update("update user set user_image=? where user_id="+id,inputStream);
		return "Photo Upload Successfully";
	}
	
	
	
	
	
	@GetMapping("/getImage/{id}")
	public void getPhotoById(@PathVariable int id) {

		String url="jdbc:mysql://localhost:3306/dotnetproject";
		String Username="root";
		String Password="C@stleking786";
		
		Connection con=null;
		PreparedStatement ps=null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection(url,Username,Password);
//			File file=new File("D:\\IET_JAVA_Script\\Z2_FrontEnd\\share-steer\\src\\pages\\profile\\images\\user.jpg");
			File file=new File("D:\\IET_JAVA_Script\\Z2_FrontEnd\\steer\\src\\pages\\profile\\images\\user.jpg");

			FileOutputStream fos=new FileOutputStream(file);
			byte b[];
			Blob blob;
			
			ps=con.prepareStatement("select user_image from user where user_id="+id);
			ResultSet rs=ps.executeQuery();
			while(rs.next())
			{
				blob=rs.getBlob(1);
				b=blob.getBytes(1,(int)blob.length());
				fos.write(b);
			}
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		finally {
			try {
				ps.close();
				con.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public int uploadPhoto(String path,int id)
	{
		int status=0;
		String url="jdbc:mysql://localhost:3306/dotnetproject";
		String Username="root";
		String Password="C@stleking786";
		
		Connection con=null;
		PreparedStatement ps=null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con=DriverManager.getConnection(url,Username,Password);
			File file=new File(path);
			FileInputStream fin=new FileInputStream(file);			
			ps=con.prepareStatement("update user set user_image=? where user_id="+id);
			ps.setBinaryStream(1, fin,(int)file.length());
			status=ps.executeUpdate();
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		finally {
			try {
				ps.close();
				con.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return status;
		
	}
	
	
	@PostMapping("/updateprofilebyAdmin")
	public String adminUpdate(@RequestBody User u)
	{
		String messege="";
		if(u==null)
			return "Enter Valid data";
		try {
			temp.update("update user set password='"+u.getPassword()+"',first_name='"+u.getFirst_name()+"', last_name='"+u.getLast_name()+" ',birth_date='"+u.getBirth_date()+"',gender='"+u.getGender()+"',contact='"+u.getContact()+"', user_name= '"+u.getUser_name()+"' , email_id='"+u.getEmail_id()+"' , gender='"+u.getGender()+"' , is_verified="+u.isIs_varified()+" where user_id="+u.getUser_id());
			messege="User Update successfully";

		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			messege="Query Failed"+e.getMessage();

			e.printStackTrace();
		}

		return messege;
	}
}
