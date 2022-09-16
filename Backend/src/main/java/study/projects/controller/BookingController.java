package study.projects.controller;

import java.util.ArrayList;
import java.util.List;

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

import study.projects.entity.Booking;

@CrossOrigin
@RestController
@RequestMapping(path="/sharesteer")
public class BookingController {

	@Autowired
	JdbcTemplate temp;

	@PostMapping("/bookride")
	public String bookride(@RequestBody Booking booking)
	{
		String messege="";		
		System.out.println(booking);

		try {
			temp.update("insert into booking (ride_id,user_id,number_of_seats,status,booking_date,amount) values(?,?,?,?,?,?)",booking.getRide_id(),booking.getUser_id(),booking.getNumber_of_seats(),booking.isStatus(),booking.getBooking_date(),booking.getAmount());
			messege="Ticket Booked Successfully You Will Get Confirmation By Driver";

		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			messege="Query Failed"+e.getMessage();

			e.printStackTrace();
		}		
		return messege;
	}

	@GetMapping("/getAllBookings/{id}")
	public ArrayList<Booking> myBooking(@PathVariable int id)
	{
		List<Booking>bookings=new ArrayList<Booking>();
		try {
		bookings=temp.query("select * from Booking where user_id="+id,(rs,row_num)->{return new Booking(rs.getInt(1),rs.getInt(2),rs.getInt(3),rs.getInt(4),rs.getBoolean(5),rs.getString(6),rs.getInt(7));});
		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return (ArrayList<Booking>) bookings;
	}


}
