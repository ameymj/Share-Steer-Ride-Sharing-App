package study.projects.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.projects.entity.Vehicle;

@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
public class VehicleController {

	@Autowired
	JdbcTemplate temp;

	@PostMapping("/addvehicle")
	public String vehicle(@RequestBody Vehicle vehicle)
	{
		String message="";

		try {
			temp.update("insert into vehicle (user_id,vehicle_model,vehicle_reg_number,capacity,vehicle_image) values(?,?,?,?,?)",vehicle.getUser_id(),vehicle.getVehicle_model(),vehicle.getVehicle_reg_number(),vehicle.getCapacity(),vehicle.getVehicle_image());

			int id = temp.queryForObject("select vehicle_id from vehicle where vehicle_reg_number="+"'"+vehicle.getVehicle_reg_number()+"'", Integer.class);			
			message=id+"";

		} catch (DataAccessException e) {
			message="Posting Ride Fail"+e.getMessage();
			e.printStackTrace();
		}

		return message;

	}

}
