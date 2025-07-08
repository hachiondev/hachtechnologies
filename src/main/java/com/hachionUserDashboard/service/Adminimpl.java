
package com.hachionUserDashboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hachionUserDashboard.dto.AdminDTO;
import com.hachionUserDashboard.dto.LoginAdminDTO;
import com.hachionUserDashboard.entity.Admin;
import com.hachionUserDashboard.repository.AdminRepository;

import Response.LoginMessage;
import Service.AdminService;

@Service
public class Adminimpl implements AdminService {

	@Autowired
	private AdminRepository repo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public String register(AdminDTO registerDto) {
		Admin admin = new Admin();
		admin.setUsername(registerDto.getUsername());
		admin.setEmail(registerDto.getEmail());

		String encodedPassword = passwordEncoder.encode(registerDto.getPassword());
		admin.setPassword(encodedPassword);

		repo.save(admin);
		return "Admin registration successful";
	}

	@Override
	public LoginMessage loginAdmin(LoginAdminDTO loginDto) {
		Admin admin = repo.findByEmail(loginDto.getEmail());

		if (admin != null) {
			String encodedPassword = admin.getPassword();

			if (passwordEncoder.matches(loginDto.getPassword(), encodedPassword)) {

				return new LoginMessage("Login successful", true, admin.getUsername(), null);
			} else {

				return new LoginMessage("Invalid password", false, null, null);
			}
		} else {

			return new LoginMessage("Email does not exist", false, null, null);
		}
	}

	@Override
	public String getUserById(Long id) {

		return null;
	}

	@Override
	public String addAdmin(AdminDTO adminDTO) {

		return null;
	}

	@Override
	public Object login(LoginAdminDTO loginDto) {

		return null;
	}

}
