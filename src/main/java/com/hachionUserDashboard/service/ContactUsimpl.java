package com.hachionUserDashboard.service;


import Service.ContactUsService;

public class ContactUsimpl implements ContactUsService {
	public String getUserById(Long id) {
		return "User with ID: " + id;
	} 
}