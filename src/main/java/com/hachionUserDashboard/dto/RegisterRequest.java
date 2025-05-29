package com.hachionUserDashboard.dto;


public class RegisterRequest {
    private String name;
    private String email;
    private String mobile;
    private String password;

public RegisterRequest() {
	
}

@Override
public String toString() {
	return "RegisterRequest [name=" + name + ", email=" + email + ", mobile=" + mobile + ", password=" + password + "]";
}

public RegisterRequest(String name, String email, String mobile, String password) {
	super();
	this.name = name;
	this.email = email;
	this.mobile = mobile;
	this.password = password;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getMobile() {
	return mobile;
}

public void setMobile(String mobile) {
	this.mobile = mobile;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}
}



//public class UserRegistrationRequest {
//
//	private String userName;
//	private String email;
//	private String password;
//	private String OTP;
//	private Long mobile;
//	private String newPassword;
//	private String confirmPassword;
//
//	public String getConfirmPassword() {
//		return confirmPassword;
//	}
//
//	public void setConfirmPassword(String confirmPassword) {
//		this.confirmPassword = confirmPassword;
//	}
//
//	public String getNewPassword() {
//		return newPassword;
//	}
//
//	public void setNewPassword(String newPassword) {
//		this.newPassword = newPassword;
//	}
//
//	public Long getMobile() {
//		return mobile;
//	}
//
//	public void setMobile(Long mobile) {
//		this.mobile = mobile;
//	}
//
//	public UserRegistrationRequest() {
//
//	}
//
//	public String getUserName() {
//		return userName;
//	}
//
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getOTP() {
//		return OTP;
//	}
//
//	public void setOTP(String oTP) {
//		OTP = oTP;
//	}
//}
