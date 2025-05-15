
package com.hachionUserDashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hachionUserDashboard.dto.AdminDTO;
import com.hachionUserDashboard.dto.LoginAdminDTO;

import Response.LoginMessage;
import Service.AdminService;




@RestController
@CrossOrigin

@RequestMapping("/api/v1/user")
public class AdminController {

	
  @Autowired
  private AdminService adminService;

  @PostMapping("/adminregister")
  public ResponseEntity<String> register(@RequestBody AdminDTO adminDto) {
      String response = (String) adminService.register(adminDto);
      return new ResponseEntity<>(response, HttpStatus.OK);
  }


  @PostMapping("/adminlogin")
  public ResponseEntity<?> login(@RequestBody LoginAdminDTO loginDto) {
      LoginMessage response = adminService.loginAdmin(loginDto);

      if (response.getStatus()) {
          // Login success, return 200 OK
          return ResponseEntity.ok(response);
      } else {
          // Login failed, return 401 Unauthorized
          return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
      }
  }


}
