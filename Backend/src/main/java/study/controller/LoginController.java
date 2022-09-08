package study.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.pojo.User;


@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
public class LoginController {
	
	@Autowired
	JdbcTemplate temp;
	
	@PostMapping("/signup")
	public String f3(@RequestBody User u)
	{
		temp.update("insert into user values(?,?,?,?,?,?,?,?,?,?,?,?,?)","default",u.getUser_name(),u.getPassword(),u.getFirst_name(),
				u.getLast_name(),u.getBirth_date(),u.getEmail_id(),u.getContact(),u.getAadhar_image(),u.getUser_image(),
				u.getDriving_licence(),u.isIs_verified());
		
		return "User added successfully";
	}

	@GetMapping("/login")
	public String f4(@RequestBody User u)
	{
		try
		{
		List<User> al=temp.query("select * from user where uname ="+u.getUser_name(), (rs,rownum)->{return new User(rs.getString(2),rs.getString(3));});
		
		if(al.get(0).getPassword().equals(u.getPassword()))
			return "Login Successful";
		else
			return "Password Invalid";
		
		}
		catch(Exception e)
		{
			return "No user exists";
		}
		
	}

}
