package study.projects.entity;

import java.io.Serializable;


public class ImageUpload implements Serializable{
	@Override
	public String toString() {
		return "ImageUpload [file=" + file + ", userId=" + userId + "]";
	}
	private byte []  file;
	private int userId;
	
	
	public ImageUpload() {
		super();
	}
	public ImageUpload(byte [] file, int userId) {
		super();
		this.file = file;
		this.userId = userId;
	}
	public byte [] getFile() {
		return file;
	}
	public void setFile(byte [] file) {
		this.file = file;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}

}
