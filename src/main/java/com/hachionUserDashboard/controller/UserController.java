package com.hachionUserDashboard.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hachionUserDashboard.dto.ChangePasswordRequest;
import com.hachionUserDashboard.dto.LoginRequest;
import com.hachionUserDashboard.dto.OtpRequest;
import com.hachionUserDashboard.dto.PartialUpdateUserDto;

import com.hachionUserDashboard.dto.UserRegistrationRequest;
import com.hachionUserDashboard.entity.User;
import com.hachionUserDashboard.repository.UserRepository;
import com.hachionUserDashboard.util.EmailUtil;

import Response.LoginResponse;
import Service.UserService;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private EmailUtil emailUtil;
	@Autowired
	private UserRepository userRepository;


	@PostMapping("/send-otp")
	public ResponseEntity<String> sendOtp(@RequestParam String email) {
		if (email == null || email.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is required");
		}

		String response = userService.sendOtp(email);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@PostMapping("/verify-otp")
	public ResponseEntity<String> verifyOtp(@RequestBody OtpRequest otpRequest) {

		String response = userService.verifyOtp(otpRequest.getEmail(), otpRequest.getOtp());

		if (response.equals("User verified successfully with OTP.")) {
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/register")
	public ResponseEntity<?> updatePassword(@RequestBody UserRegistrationRequest registrationRequest) {

		String response = userService.updatePassword(registrationRequest);

		return ResponseEntity.ok("Password updated successfully");
	}
	@GetMapping("/students")
	public ResponseEntity<List<User>> getAllRegisteredStudents() {
	    List<User> students = userService.getAllRegisteredStudents();
	    return new ResponseEntity<>(students, HttpStatus.OK);
	}



	@PutMapping("/regenerate-otp")
	public ResponseEntity<String> regenerateOtp(@RequestParam String email) {
		return new ResponseEntity<>(userService.regenerateOtp(email), HttpStatus.OK);
	}

	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
		LoginResponse loginResponse = userService.LoginUser(loginRequest);
		return ResponseEntity.ok(loginResponse);

	}

	@PutMapping("/forgotpassword")
	public ResponseEntity<String> forgotpassword(@RequestParam String email) {
		return new ResponseEntity<>(userService.forgotpassword(email), HttpStatus.OK);
	}

	@PutMapping("/setpassword")
	public ResponseEntity<String> setpassword(@RequestParam String email, @RequestHeader String newPassword) {
		return new ResponseEntity(userService.setpassword(email, newPassword), HttpStatus.OK);
	}

	@GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(Authentication authentication) {
        if (authentication == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        Object principal = authentication.getPrincipal();
        String email = null;

        if (principal instanceof OAuth2User oauthUser) {
            email = oauthUser.getAttribute("email");
        } else if (principal instanceof UserDetails userDetails) {
            email = userDetails.getUsername();
        }

        if (email == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email not found");
        }

        Optional<User> userOptional = userRepository.findByEmailForProfile(email);
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        return ResponseEntity.ok(userOptional.get());
    }


	@GetMapping("/login2")
	public String login() {
		System.out.println("From login api");
		return "Successfully Login";
	}

	@RestController
	public class HomeController {
		@GetMapping("/index")
		public Map<String, String> index() {
			return Collections.singletonMap("message", "Hello, World!");
		}
	}

	
	  @PostMapping("/reset-password")
	    public ResponseEntity<String> resetPassword(@RequestBody UserRegistrationRequest request) {
	        userService.resetPassword(request);
	        return ResponseEntity.ok("Password updated successfully");
	    }
	  @PatchMapping("/partial-update")
	  public ResponseEntity<String> partiallyUpdateUser(
	          @RequestParam String email, // This identifies the user to update
	          @RequestBody PartialUpdateUserDto updateDto) {

	      Optional<User> userOptional = Optional.of(userRepository.findByEmail(email));
	      if (userOptional.isEmpty()) {
	          return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
	      }

	      User user = userOptional.get();

	      if (updateDto.getUserName() != null) {
	          user.setUserName(updateDto.getUserName());
	      }
	      if (updateDto.getEmail() != null) {
	          user.setEmail(updateDto.getEmail());
	      }
	      if (updateDto.getMobile() != null) {
	          user.setMobile(updateDto.getMobile());
	      }

	      userRepository.save(user);
	      return ResponseEntity.ok("User details updated successfully");
	  }



	    @PutMapping("/change-password")
	    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordRequest request) {
	        String result = userService.changePassword(request.getEmail(), request.getOldPassword(), request.getNewPassword());

	        if ("Password updated successfully".equals(result)) {
	            return ResponseEntity.ok(result);
	        } else {
	            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
	        }
	    }


}