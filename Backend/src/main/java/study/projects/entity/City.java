package study.projects.entity;

public class City {
	private int cityId;
	private String cityName;
	
	public City()
	{
		
	}
	public City(String cityName)
	{
		this.cityName=cityName;
	}
	public City(int id, String name) {
		this.cityName=name;
		this.cityId=id;
	}
	
	public int getCityId() {
		return cityId;
	}
	public void setCityId(int cityId) {
		this.cityId = cityId;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

}
