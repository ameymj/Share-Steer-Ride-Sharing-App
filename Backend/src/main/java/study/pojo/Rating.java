package study.pojo;

public class Rating {
	
	private int driver_id,user_id,rating;

	public Rating(int driver_id, int user_id, int rating) {
		super();
		this.driver_id = driver_id;
		this.user_id = user_id;
		this.rating = rating;
	}

	public int getDriver_id() {
		return driver_id;
	}

	public void setDriver_id(int driver_id) {
		this.driver_id = driver_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
	
	

}
