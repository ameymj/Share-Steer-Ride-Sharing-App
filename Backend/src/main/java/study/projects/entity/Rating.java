package study.projects.entity;

public class Rating {
	
	private int driver_id,user_id,rating;
	private String comment;

	public Rating(int driver_id, int user_id, int rating,String comment) {
		super();
		this.driver_id = driver_id;
		this.user_id = user_id;
		this.rating = rating;
		this.comment=comment;
	}
	
	public Rating()
	{
		
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
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
