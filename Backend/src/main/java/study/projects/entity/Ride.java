package study.projects.entity;

public class Ride {
	
	private int ride_id,user_id,vehicle_id;
	private String date_of_journey,time_of_journey,from_city,to_city;
	private int total_seats,available_seats;
	private String status;
	private int ride_cost;
	private String description;
	private boolean only_females;
	
	public Ride()
	{
		
	}
	
	
	public Ride(int ride_id, int user_id, int vehicle_id, String date_of_journey, String time_of_journey,
			String from_city, String to_city, int total_seats, int available_seats, String status, int ride_cost,
			String description, boolean only_females) {
		super();
		this.ride_id = ride_id;
		this.user_id = user_id;
		this.vehicle_id = vehicle_id;
		this.date_of_journey = date_of_journey;
		this.time_of_journey = time_of_journey;
		this.from_city = from_city;
		this.to_city = to_city;
		this.total_seats = total_seats;
		this.available_seats = available_seats;
		this.status = status;
		this.ride_cost = ride_cost;
		this.description = description;
		this.only_females = only_females;
	}
	public Ride(int ride_id,int user_id,int vehicle_id,String doj, String toj, String fromCity, String toCity, int totalSeat, int availableSeat, int cost,
			String description,String status) {
		 this.ride_id=ride_id;
		 this.user_id=user_id;
		 this.vehicle_id=vehicle_id;
		 this.date_of_journey=doj;
		 this.time_of_journey=toj;
		 this.from_city=fromCity;
		 this.to_city=toCity;
		 this.total_seats=totalSeat;
		 this.available_seats=availableSeat;
		 this.ride_cost=cost;
		 this.description=description;
		 this.status=status;
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

	public int getVehicle_id() {
		return vehicle_id;
	}

	public void setVehicle_id(int vehicle_id) {
		this.vehicle_id = vehicle_id;
	}

	public String getDate_of_journey() {
		return date_of_journey;
	}

	public void setDate_of_journey(String date_of_journey) {
		this.date_of_journey = date_of_journey;
	}

	public String getTime_of_journey() {
		return time_of_journey;
	}

	public void setTime_of_journey(String time_of_journey) {
		this.time_of_journey = time_of_journey;
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

	public int getTotal_seats() {
		return total_seats;
	}

	public void setTotal_seats(int total_seats) {
		this.total_seats = total_seats;
	}

	public int getAvailable_seats() {
		return available_seats;
	}

	public void setAvailable_seats(int available_seats) {
		this.available_seats = available_seats;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getRide_cost() {
		return ride_cost;
	}

	public void setRide_cost(int ride_cost) {
		this.ride_cost = ride_cost;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isOnly_females() {
		return only_females;
	}

	public void setOnly_females(boolean only_females) {
		this.only_females = only_females;
	}
	
	
	

}
