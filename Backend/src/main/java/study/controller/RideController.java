package study.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.pojo.Ride;
import study.pojo.User;


@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
public class RideController {
	
	@Autowired
	JdbcTemplate temp;
	
	@PostMapping("/addride")
	public String f1(@RequestBody Ride r)
	{
		
		
		temp.update("insert into ride values(?,?,?,?,?,?,?,?,?,?,?,?,?)","default",r.getUser_id(),r.getVehicle_id(),r.getDate_of_journey(),
				r.getTime_of_journey(),r.getFrom_city(),r.getTo_city(),r.getTotal_seats(),r.getAvailable_seats(),r.isStatus(),
				r.getRide_cost(),r.getDescription(),r.isOnly_females());
		
		return "Ride added successfully";
	}
	
	@PostMapping("/getrides")
	public ArrayList<Ride> f2(@RequestBody Ride r)
	{
		String c1=r.getFrom_city();
		String c2=r.getTo_city();
		String d=r.getDate_of_journey();
		String t=r.getTime_of_journey();
		
		List<Ride> al = temp.query("select * from ride where from_city='"+c1+"' and to_city='"+c2+"'and date >='"+d+"'",(rs,rownum)->{return new Ride(rs.getInt(1),
				rs.getInt(2),rs.getInt(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getInt(8),rs.getInt(9),rs.getBoolean(10),rs.getInt(11),
				rs.getString(12),rs.getBoolean(13));});
		
		for(Ride r1 : al)
		{
			System.out.println(r1);
		}
		return (ArrayList<Ride>)al;
	}
	
	
}
