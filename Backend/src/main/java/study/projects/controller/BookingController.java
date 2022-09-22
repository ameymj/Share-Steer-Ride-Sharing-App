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
		try {
			temp.update("insert into booking (ride_id,user_id,number_of_seats,booking_date,amount) values(?,?,?,?,?)",booking.getRide_id(),booking.getUser_id(),booking.getNumber_of_seats(),booking.getBooking_date(),booking.getAmount());
			messege="Ticket Booked Successfully You Will Get Confirmation By Driver";

		} catch (DataAccessException e) {
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
		bookings=temp.query("select * from Booking where user_id="+id,(rs,row_num)->{return new Booking(rs.getInt(1),rs.getInt(2),rs.getInt(3),rs.getInt(4),rs.getString(5),rs.getString(6),rs.getInt(7));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return (ArrayList<Booking>) bookings;
	}
	
	@GetMapping("/getAllBooking")
	public ArrayList<Booking> trial()
	{                                                                                                                                                                                                                                                                                                   
		List<Booking>bookings=new ArrayList<Booking>();
		try {
		bookings=temp.query("select date_of_journey,time_of_journey,from_city.city_name,to_city.city_name,description,number_of_seats,booking_date,amount from ride,from_city,to_city,booking where booking.ride_id=ride.ride_id and ride.from_city=from_city.city_id and ride.to_city=to_city.city_id;",(rs,row_num)->{return new Booking(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getInt(6),rs.getString(7),rs.getInt(8));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		
		return (ArrayList<Booking>) bookings;
	}
	
	@GetMapping("/getmybookings/{id}")
	public ArrayList<Booking> myBookingStatus(@PathVariable int id)
	{
		String queryString="select date_of_journey,time_of_journey,from_city.city_name,to_city.city_name,description,number_of_seats,booking_date,amount,booking.status,booking_id from ride,from_city,to_city,booking where booking.ride_id=ride.ride_id and ride.from_city=from_city.city_id and ride.to_city=to_city.city_id and date_of_journey>=now() and booking.user_id="+id;
		List<Booking>bookings=new ArrayList<Booking>();
		try {
		bookings=temp.query(queryString,(rs,row_num)->{return new Booking(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getInt(6),rs.getString(7),rs.getInt(8),rs.getString(9),rs.getInt(10));});
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		return (ArrayList<Booking>) bookings;
	}
	
	@GetMapping("/confirmTicket/{id}")
	public String confirmTicket(@PathVariable int id)
	{
		String queryString="update booking set status='Confirmed' where booking_id="+id;
		String messege="";
		try {
		temp.update(queryString);
		messege="Seat Confirmed";
		} catch (DataAccessException e) {
			messege="Query Failed";
			e.printStackTrace();
		}
		return messege;
	}
	
	@GetMapping("/cancelTicket/{id}")
	public String cancelTicket(@PathVariable int id)
	{
		String queryString="update booking set status='Cancel-By-Driver' where booking_id="+id;
		String messege="";
		try {
		temp.update(queryString);
		messege="Seat Rejected";
		} catch (DataAccessException e) {
			messege="Query Failed";
			e.printStackTrace();
		}
		return messege;
	}
	
	@GetMapping("/cancelTicketbyself/{id}")
	public String cancelTicketByPassenger(@PathVariable int id)
	{
		String queryString="update booking set status='Cancel-By-Passenger' where booking_id="+id;
		String messege="";
		try {
		temp.update(queryString);
		messege="Seat Rejected";
		} catch (DataAccessException e) {
			messege="Query Failed";
			e.printStackTrace();
		}
		return messege;
	}
	
	
	
}
