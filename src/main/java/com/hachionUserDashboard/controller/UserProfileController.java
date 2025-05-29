package com.hachionUserDashboard.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.UUID;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.hachionUserDashboard.entity.UserProfile;
import com.hachionUserDashboard.service.UserProfileService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
@RestController
@RequestMapping("/profile")
public class UserProfileController {

    @Autowired
    private UserProfileService service;

    private final String UPLOAD_DIR = "uploads/";

    @PostMapping("/add")
    public ResponseEntity<?> addProfile(
            @RequestPart("profileData") String profileData,
            @RequestPart(value = "profileImage", required = false) MultipartFile profileImage,
            @RequestPart(value = "resume", required = false) MultipartFile resume) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        UserProfile profile = objectMapper.readValue(profileData, UserProfile.class);

        if (profileImage != null && !profileImage.isEmpty()) {
            String imagePath = saveFile(profileImage);
            profile.setProfileImagePath(imagePath);
        }

        if (resume != null && !resume.isEmpty()) {
            String resumePath = saveFile(resume);
            profile.setResumePath(resumePath);
        }

        UserProfile createdProfile = service.createProfile(profile);
        return ResponseEntity.ok(createdProfile);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateProfile(
            @PathVariable Long id,
            @RequestPart("profileData") String profileData,
            @RequestPart(value = "profileImage", required = false) MultipartFile profileImage,
            @RequestPart(value = "resume", required = false) MultipartFile resume) throws IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        UserProfile updatedProfile = objectMapper.readValue(profileData, UserProfile.class);

        if (profileImage != null && !profileImage.isEmpty()) {
            String imagePath = saveFile(profileImage);
            updatedProfile.setProfileImagePath(imagePath);
        }

        if (resume != null && !resume.isEmpty()) {
            String resumePath = saveFile(resume);
            updatedProfile.setResumePath(resumePath);
        }

        UserProfile profile = service.updateProfile(id, updatedProfile);
        return ResponseEntity.ok(profile);
    }

    @GetMapping("/get/{userName}")
    public ResponseEntity<?> getProfile(@PathVariable String userName) {
        UserProfile profile = service.getProfileByUserName(userName);
        return ResponseEntity.ok(profile);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProfile(@PathVariable Long id) {
        service.deleteProfile(id);
        return ResponseEntity.ok("Profile deleted successfully.");
    }
    
    

    private String saveFile(MultipartFile file) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(UPLOAD_DIR + fileName);
        Files.createDirectories(filePath.getParent());
        Files.write(filePath, file.getBytes());
        return filePath.toString();
    }
}
