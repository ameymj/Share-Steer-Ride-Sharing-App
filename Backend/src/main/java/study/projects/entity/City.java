package study.projects.entity;

public class City {
	private String cityName;
	
	public City()
	{
		
	}
	public City(String cityName)
	{
		this.cityName=cityName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

}
