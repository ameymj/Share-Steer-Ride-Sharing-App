package study.pojo;

public class User {

	private int user_id;
	private String user_name,password,first_name,last_name,birth_date,email_id,
					contact,aadhar_image,user_image,driving_licence;
	private boolean is_verified;
	
	
	public User(int user_id, String user_name, String password, String first_name, String last_name, String birth_date,
			String email_id, String contact, String aadhar_image, String user_image, String driving_licence,
			boolean is_verified) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.birth_date = birth_date;
		this.email_id = email_id;
		this.contact = contact;
		this.aadhar_image = aadhar_image;
		this.user_image = user_image;
		this.driving_licence = driving_licence;
		this.is_verified = is_verified;
	}
	
	public User(String user_name, String password) {
		super();
		this.user_id = 0;
		this.user_name = user_name;
		this.password = password;
		this.first_name = "";
		this.last_name = "";
		this.birth_date = "";
		this.email_id = "";
		this.contact = "";
		this.aadhar_image = "";
		this.user_image = "";
		this.driving_licence = "";
		this.is_verified = false;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public String getUser_name() {
		return user_name;
	}


	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
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


	public String getBirth_date() {
		return birth_date;
	}


	public void setBirth_date(String birth_date) {
		this.birth_date = birth_date;
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


	public String getAadhar_image() {
		return aadhar_image;
	}


	public void setAadhar_image(String aadhar_image) {
		this.aadhar_image = aadhar_image;
	}


	public String getUser_image() {
		return user_image;
	}


	public void setUser_image(String user_image) {
		this.user_image = user_image;
	}


	public String getDriving_licence() {
		return driving_licence;
	}


	public void setDriving_licence(String driving_licence) {
		this.driving_licence = driving_licence;
	}


	public boolean isIs_verified() {
		return is_verified;
	}


	public void setIs_verified(boolean is_verified) {
		this.is_verified = is_verified;
	}
	
	
}
