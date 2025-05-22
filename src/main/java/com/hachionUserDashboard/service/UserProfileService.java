package com.hachionUserDashboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import com.hachionUserDashboard.entity.UserProfile;
import com.hachionUserDashboard.repository.UserProfileRepository;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository repository;

    public UserProfile createProfile(UserProfile profile) {
        if (repository.findByUserName(profile.getUserName()).isPresent()) {
            throw new RuntimeException("Profile already exists for user: " + profile.getUserName());
        }
        return repository.save(profile);
    }

    public UserProfile updateProfile(Long id, UserProfile updatedProfile) {
        UserProfile existingProfile = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Profile not found"));

        if (updatedProfile.getUserName() != null) existingProfile.setUserName(updatedProfile.getUserName());
        if (updatedProfile.getSummary() != null) existingProfile.setSummary(updatedProfile.getSummary());
        if (updatedProfile.getPersonalInfo() != null) existingProfile.setPersonalInfo(updatedProfile.getPersonalInfo());
        if (updatedProfile.getSalaryDetails() != null) existingProfile.setSalaryDetails(updatedProfile.getSalaryDetails());
        if (updatedProfile.getWorkExperience() != null) existingProfile.setWorkExperience(updatedProfile.getWorkExperience());
        if (updatedProfile.getEducationDegree() != null) existingProfile.setEducationDegree(updatedProfile.getEducationDegree());
        if (updatedProfile.getEducationInstitute() != null) existingProfile.setEducationInstitute(updatedProfile.getEducationInstitute());
        if (updatedProfile.getEducationLocation() != null) existingProfile.setEducationLocation(updatedProfile.getEducationLocation());
        if (updatedProfile.getEducationDate() != null) existingProfile.setEducationDate(updatedProfile.getEducationDate());
        if (updatedProfile.getVisaStatus() != null) existingProfile.setVisaStatus(updatedProfile.getVisaStatus());
        if (updatedProfile.getNoticePeriod() != null) existingProfile.setNoticePeriod(updatedProfile.getNoticePeriod());
        if (updatedProfile.getExpectedSalary() != null) existingProfile.setExpectedSalary(updatedProfile.getExpectedSalary());
        if (updatedProfile.getCertification() != null) existingProfile.setCertification(updatedProfile.getCertification());
        if (updatedProfile.getSkills() != null) existingProfile.setSkills(updatedProfile.getSkills());
        if (updatedProfile.getAdditionalInfo() != null) existingProfile.setAdditionalInfo(updatedProfile.getAdditionalInfo());
        if (updatedProfile.getDate() != null) existingProfile.setDate(updatedProfile.getDate());
        if (updatedProfile.getProfileImagePath() != null) existingProfile.setProfileImagePath(updatedProfile.getProfileImagePath());
        if (updatedProfile.getResumePath() != null) existingProfile.setResumePath(updatedProfile.getResumePath());

        return repository.save(existingProfile);
    }

    public UserProfile getProfileByUserName(String userName) {
        return repository.findByUserName(userName)
                .orElseThrow(() -> new RuntimeException("Profile not found for user: " + userName));
    }

    public void deleteProfile(Long id) {
        repository.deleteById(id);
    }
}
