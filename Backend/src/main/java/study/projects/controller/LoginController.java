package study.projects.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.projects.entity.User;


@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
public class LoginController {
	
	@Autowired
	JdbcTemplate temp;
	
	@PostMapping("/signup")
	public String f3(@RequestBody User u)
	{
		temp.update("insert into user (user_name,password,first_name,last_name,birth_date,gender,email_id,contact,is_verified) values(?,?,?,?,?,?,?,?,?)",u.getUser_name(),u.getPassword(),u.getFirst_name(),
				u.getLast_name(),u.getBirth_date(),u.getGender(),u.getEmail_id(),u.getContact(),u.isIs_varified());
		
		return "User added successfully";
	}

	
	@GetMapping("/getDetail/{username}")
	public User f5(@PathVariable String username)
	{
		User user=temp.queryForObject("select * from user where user_name="+username, (rs,rownum)->{return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));});
		return user;
	}
	
	@GetMapping("/getAllUsers")
	public ArrayList<User> f6()
	{
		List<User> list=temp.query("select * from user",(rs,rownum)->{return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));});
		System.out.println(list);
		return (ArrayList<User>) list;
	}
	
	
	@PostMapping("/updateprofile")
	public String f4(@RequestBody User u)
	{
		temp.update("update user set password='"+u.getPassword()+"',first_name='"+u.getFirst_name()+"',last_name='"+u.getLast_name()+"',birth_date='"+u.getBirth_date()+"',gender='"+u.getGender()+"',contact='"+u.getContact()+"' where user_name= '"+u.getUser_name()+"'");
		
		return "User Update successfully";
	}

}
