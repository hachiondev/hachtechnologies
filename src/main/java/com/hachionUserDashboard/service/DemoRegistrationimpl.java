package com.hachionUserDashboard.service;

import org.springframework.stereotype.Service;

import Service.DemoRegistration;

@Service
public class DemoRegistrationimpl implements DemoRegistration {
	public String getUserById(Long id) {
		return "User with ID: " + id;
	}
}