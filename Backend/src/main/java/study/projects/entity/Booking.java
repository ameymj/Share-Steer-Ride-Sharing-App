package study.projects.entity;

public class Booking {
	
	private int booking_id,ride_id,user_id,number_of_seats;
	private boolean status;
	private String booking_date;
	private int amount;
	
	public Booking()
	{
		
	}
	
	public Booking(int booking_id, int ride_id, int user_id, int number_of_seats, boolean status, String booking_date,
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

	@Override
	public String toString() {
		return "Booking [booking_id=" + booking_id + ", ride_id=" + ride_id + ", user_id=" + user_id
				+ ", number_of_seats=" + number_of_seats + ", status=" + status + ", booking_date=" + booking_date
				+ ", amount=" + amount + "]";
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

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
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
	
	
	

}
