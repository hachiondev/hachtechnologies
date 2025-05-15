package com.hachionUserDashboard.dto;

public class PartialUpdateUserDto {
    private String userName;
    private String email;
    private Long mobile;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Long getMobile() {
		return mobile;
	}
	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "PartialUpdateUserDto [userName=" + userName + ", email=" + email + ", mobile=" + mobile + "]";
	}
	public PartialUpdateUserDto(String userName, String email, Long mobile) {
		super();
		this.userName = userName;
		this.email = email;
		this.mobile = mobile;
	}

}
