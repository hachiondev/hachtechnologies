package com.hachionUserDashboard.service;

import Service.Jobs;

public class Jobsimpl implements Jobs {
	public String getUserById(Long id) {
		return "User with ID: " + id;
	} 
}
