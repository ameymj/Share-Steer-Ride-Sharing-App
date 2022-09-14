package study.projects.entity;

public class Vehicle {
	private int vehicle_id;
	private int user_id;
	private String vehicle_model;
	private String vehicle_reg_number;
	private int capacity;
	private byte vehicle_image;
	
	public Vehicle()
	{
		
	}
	
	public Vehicle(int vehicle_id, int user_id, String vehicle_model, String vehicle_reg_number, int capacity,
			byte vehicle_image) {
		super();
		this.vehicle_id = vehicle_id;
		this.user_id = user_id;
		this.vehicle_model = vehicle_model;
		this.vehicle_reg_number = vehicle_reg_number;
		this.capacity = capacity;
		this.vehicle_image = vehicle_image;
	}

	public int getVehicle_id() {
		return vehicle_id;
	}

	public void setVehicle_id(int vehicle_id) {
		this.vehicle_id = vehicle_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getVehicle_model() {
		return vehicle_model;
	}

	public void setVehicle_model(String vehicle_model) {
		this.vehicle_model = vehicle_model;
	}

	public String getVehicle_reg_number() {
		return vehicle_reg_number;
	}

	public void setVehicle_reg_number(String vehicle_reg_number) {
		this.vehicle_reg_number = vehicle_reg_number;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public byte getVehicle_image() {
		return vehicle_image;
	}

	public void setVehicle_image(byte vehicle_image) {
		this.vehicle_image = vehicle_image;
	}
	
	
	
	
	

}
