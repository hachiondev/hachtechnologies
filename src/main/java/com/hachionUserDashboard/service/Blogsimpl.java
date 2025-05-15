package com.hachionUserDashboard.service;

import Service.BlogService;


public class Blogsimpl implements BlogService {
	public String getUserById(Long id) {
		return "User with ID: " + id;
	}
}
