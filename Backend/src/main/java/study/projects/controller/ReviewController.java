package study.projects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.projects.entity.Rating;
import study.projects.entity.User;

@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
public class ReviewController {

	
	@Autowired
	JdbcTemplate temp;
	
	
	@GetMapping("/getRating/{driver_id}")
	public Rating f3(@PathVariable int driver_id )
	{
		Rating rating=null;
		try {
		//	int avg = temp.queryForObject("select user_id from ride where ride_id="+ride_id,Integer.class);
			rating = temp.queryForObject("select * from rating where driver_id="+driver_id, 
					(rs,rownum)->{return new Rating(rs.getInt(1),rs.getInt(2),rs.getInt(3),rs.getString(3));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return rating;
		
	}
	
	@GetMapping("/getUser/{ride_id}")
	public User f1(@PathVariable int ride_id)
	{
		User user=null;
		try {
			int id = temp.queryForObject("select user_id from ride where ride_id="+ride_id,Integer.class);
			user = temp.queryForObject("select * from user where user_id="+id, (rs,rownum)->{return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return user;
		
	}
	
	@PostMapping("/giverating")
	public String f2(@RequestBody Rating r )
	{
		String message="";
		try {
			temp.update("insert into rating values(?,?,?,?)",r.getDriver_id(),r.getUser_id(),r.getRating(),r.getComment());
			message="successfully submited";
			} catch (DataAccessException e) {
				message="query failed";
			e.printStackTrace();
		}
		
		return message;
	}
}
