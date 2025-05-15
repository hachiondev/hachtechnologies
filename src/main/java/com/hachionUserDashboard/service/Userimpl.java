package com.hachionUserDashboard.service;


import java.security.SecureRandom;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.hachionUserDashboard.dto.LoginRequest;
import com.hachionUserDashboard.dto.UserRegistrationRequest;
import com.hachionUserDashboard.entity.User;
import com.hachionUserDashboard.repository.UserRepository;
import com.hachionUserDashboard.util.EmailUtil;
import com.hachionUserDashboard.util.OtpUtil;

import Response.LoginResponse;
import Service.UpdateUserProfileDto;
import Service.UserService;

@Service
public class Userimpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	private OtpUtil otpUtil;
	@Autowired
	private EmailUtil emailUtil;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public String sendOtp(String email) {

		String otp = String.valueOf(new Random().nextInt(9999));

		User user = userRepository.findByEmail(email);

		if (user == null) {
			user = new User();
			user.setEmail(email);
			user.setOTPStatus(false);
		}

		user.setOTP(otp);
		user.setOTPStatus(false);

		userRepository.save(user);
		emailUtil.sendOtpEmail(email, otp);

		return "OTP sent to your email.";
	}

	@Override
	public String verifyOtp(String email, String otp) {
		User user = userRepository.findByEmail(email);

		if (user == null) {
			return "Email does not exist in the database.";
		}

		if (user.getOTP().equals(otp)) {

			user.setOTPStatus(true);
			user.setOTP(null);
			userRepository.save(user);

			return "User verified successfully with OTP.";
		} else {
			return "Invalid OTP.";
		}
	}
	
	@Override
	public String updatePassword(UserRegistrationRequest registrationRequest) {

		if (!registrationRequest.getPassword().equals(registrationRequest.getConfirmPassword())) {
			return "Password and Confirm Password do not match.";
		}
		User user = userRepository.findByEmail(registrationRequest.getEmail());
		if (user == null) {
			return "Email does not exist.";
		}
		String hashedPassword = passwordEncoder.encode(registrationRequest.getPassword());

		user.setPassword(hashedPassword);
		user.setUserName(registrationRequest.getUserName());
		user.setMobile(registrationRequest.getMobile());
		
		userRepository.save(user);

		return "Password and user details updated successfully.";
	}

	@Override
	public String addUser(UserRegistrationRequest userDTO) {

		User user = new User();

		user.setUserName(userDTO.getUserName());
		user.setEmail(userDTO.getEmail());
		String hashedPassword = passwordEncoder.encode(userDTO.getPassword());
		user.setPassword(hashedPassword);
		user.setMobile(userDTO.getMobile());
		user.setOTP(userDTO.getOTP());
		user.setOtpGeneratedTime(LocalDateTime.now());

		userRepository.save(user);
		return user.getUserName();
	}

	@Override
	public User saveUser(String username, String email) {
		// Check if the user already exists
		Optional<User> existingUser = userRepository.findBYEmailForOauth(email);
		if (existingUser.isPresent()) {
			return existingUser.get();
		}

		// Create a new user without using builder
		User newUser = new User();
		newUser.setUserName(username);
		newUser.setEmail(email);
		newUser.setOTPStatus(true);

		return userRepository.save(newUser);
	}

	public Optional<User> getUserByEmail(String email) {
		return userRepository.findBYEmailForOauth(email);
	}

	public List<User> getAllRegisteredStudents() {
		return userRepository.findAll(); // This is correct
	}

	@Override
	public LoginResponse LoginUser(LoginRequest loginRequest) {
		String msg = "";
		User user1 = userRepository.findByEmail(loginRequest.getEmail());

		if (user1 != null) { // Check if email exists
			String password = loginRequest.getPassword();
			String encodedPassword = user1.getPassword();
			String name = user1.getUserName();
			String email = user1.getEmail();

			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if (isPwdRight) {
				Optional<User> user = userRepository.findOneByEmailAndPassword(loginRequest.getEmail(),
						encodedPassword);
				if (user.isPresent()) {
					return new LoginResponse("Login success", true, name, email);
				} else {
					return new LoginResponse("Login Failed", false, name, email);
				}
			} else {
				return new LoginResponse("password must match", false, name, email);
			}
		} else {
			return new LoginResponse("email not exist", false, null, msg);
		}
	}

	@Autowired
	public void UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public String verifyAccount(String email, String otp) {
		User user = userRepository.findByEmail(email);
		if (user == null) {
			throw new RuntimeException("User not found with this email: " + email);
		}

		if (user.getOTP().equals(otp)
				&& Duration.between(user.getOtpgeneratedTime(), LocalDateTime.now()).getSeconds() < (3 * 60)) {

			user.setActive(true);
			userRepository.save(user);
			return "OTP verified successfully";
		}
		return "Please regenerate OTP and try again";
	}

	public String regenerateOtp(String email) {
		User user = userRepository.findByEmail(email);
		if (user == null) {
			throw new RuntimeException("Email not found.");
		}

		// Generate a new OTP
		String newOtp = otpUtil.generateOtp();
		user.setOTP(newOtp);

		// Save the updated user with the new OTP
		userRepository.save(user);

		// Send the new OTP to the user's email
		emailUtil.sendOtpEmail(user.getEmail(), newOtp);

		return "OTP regenerated and sent successfully.";
	}

	public String forgotpassword(String email) {
		User user = userRepository.findByEmail(email);

		// Generate a random password
		String randomPassword = generateRandomPassword();

		// Hash the generated random password
		String encodedPassword = passwordEncoder.encode(randomPassword);

		// Update the user's password in the database
		user.setPassword(encodedPassword);
		userRepository.save(user);

		// Send the random password to the user's email
		emailUtil.sendSetPasswordEmail(email, randomPassword);

		return "Please check your email to get your new password.";
	}

	private String generateRandomPassword() {
		// Create a random password (e.g., 12 characters long, alphanumeric)
		String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
		SecureRandom random = new SecureRandom();
		StringBuilder password = new StringBuilder(12);

		for (int i = 0; i < 12; i++) {
			int randomIndex = random.nextInt(characters.length());
			password.append(characters.charAt(randomIndex));
		}

		return password.toString();
	}

	@Override
	public String saveOtp(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String verifyAndRegisterUser(UserRegistrationRequest userDTO) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String addUser(UserRegistrationRequest userDTO, String otp) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object register(UserRegistrationRequest registerDto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object setpassword(String email, String newPassword) {
		User user = userRepository.findByEmail(email);
		user.setPassword(newPassword);
		userRepository.save(user);
		return "New Password set successfully login with new password";
	}
	


	
	 
	 public void resetPassword(UserRegistrationRequest request) {
		    Optional<User> optionalUser = userRepository.findByEmailForProfile(request.getEmail());

		    if (optionalUser.isPresent()) {
		        User user = optionalUser.get();

		        // 1. Check if old password matches the encrypted password in DB
		        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
		            System.out.println("Old password is incorrect");
		            return;
		        }

		        // 2. Check if new password and confirm password match
		        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
		            System.out.println("New password and confirm password do not match");
		            return;
		        }

		        // 3. Check if old password and new password are the same
		        if (passwordEncoder.matches(request.getNewPassword(), user.getPassword())) {
		            System.out.println("New password must be different from the old password");
		            return;
		        }

		        // 4. Encrypt and update the new password
		        String encodedPassword = passwordEncoder.encode(request.getNewPassword());
		        user.setPassword(encodedPassword);
		        userRepository.save(user);
		        System.out.println("Password updated successfully");

		    } else {
		        System.out.println("User not found with email: " + request.getEmail());
		    }
		}

	 public String changePassword(String email, String oldPassword, String newPassword) {
//		    User userOptional = userRepository.findByEmail(email); // Corrected variable name
//		    if (userOptional.isPresent()) {
//		        User user = userOptional.get();
		        Optional<User> userOptional = Optional.of(userRepository.findByEmail(email));
		        if (userOptional.isPresent()) {
		            User user = userOptional.get();
		        // Compare old password using encoded form
		        if (passwordEncoder.matches(oldPassword, user.getPassword())) {
		            // Encode the new password
		            String encodedNewPassword = passwordEncoder.encode(newPassword);
		            user.setPassword(encodedNewPassword);
		            userRepository.save(user);
		            return "Password updated successfully";
		        } else {
		            return "Old password is incorrect";
		        }
		    } else {
		        return "User not found";
		    }
		}

	@Override
	public String updateUserProfile(User updatedUser) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateUserProfile(UpdateUserProfileDto updatedUser) {
		// TODO Auto-generated method stub
		return null;
	}






}
