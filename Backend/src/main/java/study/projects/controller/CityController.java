package study.projects.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import study.projects.entity.City;

@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")public class CityController {
	
	@Autowired
	JdbcTemplate temp;
	
	@GetMapping("/getAllCities")
	public ArrayList<City> f1()
	{
		List<City> list=temp.query("select * from from_city", (rs,rownum)->{return new City(rs.getInt(1),rs.getString(2));});
		
		return (ArrayList<City>) list;
	}

}
