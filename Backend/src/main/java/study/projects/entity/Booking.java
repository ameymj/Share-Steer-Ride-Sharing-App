package study.projects.entity;

public class Booking {
	
	private int booking_id,ride_id,user_id,number_of_seats;
	private String status;
	private String booking_date;
	private int amount;
	private String from_city,to_city,description,journey_date,journey_time;
	private String first_name,last_name,email_id,contact;
	
	public Booking()
	{
		
	}
		
	public Booking(int booking_id, int ride_id, int user_id, int number_of_seats, String status, String booking_date,
			int amount) {
		super();
		this.booking_id = booking_id;
		this.ride_id = ride_id;
		this.user_id = user_id;
		this.number_of_seats = number_of_seats;
		this.status = status;
		this.booking_date = booking_date;
		this.amount = amount;
	}
	//from_city,to_city,description,journey_date,journey_time
	//date_of_journey | time_of_journey | city_name | city_name  | description   | number_of_seats | booking_date | amount
	public Booking(String journey_date,String journey_time,String from_city,String to_city,String description, int number_of_seats, String booking_date,
			int amount ) {
		super();
		this.number_of_seats = number_of_seats;
		this.booking_date = booking_date;
		this.amount = amount;
		this.from_city=from_city;
		this.to_city=to_city;
		this.journey_date=journey_date;
		this.journey_time=journey_time;
		this.description=description;
	}
	
	public Booking(String journey_date,String journey_time,String from_city,String to_city,String description, int number_of_seats, String booking_date,
			int amount,String status ) {
		super();
		this.number_of_seats = number_of_seats;
		this.booking_date = booking_date;
		this.amount = amount;
		this.from_city=from_city;
		this.to_city=to_city;
		this.journey_date=journey_date;
		this.journey_time=journey_time;
		this.description=description;
		this.status=status;
	}
	
	
	
	
	public Booking(String first_name,String last_name,String contact,String email_id,int no_of_seats,String status)
	{
		this.first_name=first_name;
		this.last_name=last_name;
		this.email_id=email_id;
		this.contact=contact;
		this.number_of_seats=no_of_seats;
		this.status=status;
	}

	
	public String getFrom_city() {
		return from_city;
	}

	public void setFrom_city(String from_city) {
		this.from_city = from_city;
	}

	public String getTo_city() {
		return to_city;
	}

	public void setTo_city(String to_city) {
		this.to_city = to_city;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getJourney_date() {
		return journey_date;
	}

	public void setJourney_date(String journey_date) {
		this.journey_date = journey_date;
	}

	public String getJourney_time() {
		return journey_time;
	}

	public void setJourney_time(String journey_time) {
		this.journey_time = journey_time;
	}


	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public int getRide_id() {
		return ride_id;
	}

	public void setRide_id(int ride_id) {
		this.ride_id = ride_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getNumber_of_seats() {
		return number_of_seats;
	}

	public void setNumber_of_seats(int number_of_seats) {
		this.number_of_seats = number_of_seats;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(String booking_date) {
		this.booking_date = booking_date;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
	
	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail_id() {
		return email_id;
	}

	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	
	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", ride_id=" + ride_id + ", user_id=" + user_id
				+ ", number_of_seats=" + number_of_seats + ", status=" + status + ", booking_date=" + booking_date
				+ ", amount=" + amount + ", from_city=" + from_city + ", to_city=" + to_city + ", description="
				+ description + ", journey_date=" + journey_date + ", journey_time=" + journey_time + "]";
	}
	

}
