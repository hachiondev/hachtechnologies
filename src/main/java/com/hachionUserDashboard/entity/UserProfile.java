package com.hachionUserDashboard.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "profile")

public class UserProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String userName;

    private String summary;
    private String personalInfo;
    private String salaryDetails;
    private String workExperience;
    private String educationDegree;
    private String educationInstitute;
    private String educationLocation;
    private String educationDate;
    private String visaStatus;
    private String noticePeriod;
    private String expectedSalary;
    private String certification;
    private String skills;
    private String additionalInfo;
   private String date;
    public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

	private String profileImagePath;
    private String resumePath;

    // Getters and Setters
    public UserProfile() {
    	
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getPersonalInfo() {
		return personalInfo;
	}

	public void setPersonalInfo(String personalInfo) {
		this.personalInfo = personalInfo;
	}

	public String getSalaryDetails() {
		return salaryDetails;
	}

	public void setSalaryDetails(String salaryDetails) {
		this.salaryDetails = salaryDetails;
	}

	public String getWorkExperience() {
		return workExperience;
	}

	public void setWorkExperience(String workExperience) {
		this.workExperience = workExperience;
	}

	public String getEducationDegree() {
		return educationDegree;
	}

	public void setEducationDegree(String educationDegree) {
		this.educationDegree = educationDegree;
	}

	public String getEducationInstitute() {
		return educationInstitute;
	}

	public void setEducationInstitute(String educationInstitute) {
		this.educationInstitute = educationInstitute;
	}

	public String getEducationLocation() {
		return educationLocation;
	}

	public void setEducationLocation(String educationLocation) {
		this.educationLocation = educationLocation;
	}

	public String getEducationDate() {
		return educationDate;
	}

	public void setEducationDate(String educationDate) {
		this.educationDate = educationDate;
	}

	public String getVisaStatus() {
		return visaStatus;
	}

	public void setVisaStatus(String visaStatus) {
		this.visaStatus = visaStatus;
	}

	public String getNoticePeriod() {
		return noticePeriod;
	}

	public void setNoticePeriod(String noticePeriod) {
		this.noticePeriod = noticePeriod;
	}

	public String getExpectedSalary() {
		return expectedSalary;
	}

	public void setExpectedSalary(String expectedSalary) {
		this.expectedSalary = expectedSalary;
	}

	public String getCertification() {
		return certification;
	}

	public void setCertification(String certification) {
		this.certification = certification;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public String getProfileImagePath() {
		return profileImagePath;
	}

	public void setProfileImagePath(String profileImagePath) {
		this.profileImagePath = profileImagePath;
	}

	public String getResumePath() {
		return resumePath;
	}

	public void setResumePath(String resumePath) {
		this.resumePath = resumePath;
	}


	@Override
	public String toString() {
		return "UserProfile [id=" + id + ", userName=" + userName + ", summary=" + summary + ", personalInfo="
				+ personalInfo + ", salaryDetails=" + salaryDetails + ", workExperience=" + workExperience
				+ ", educationDegree=" + educationDegree + ", educationInstitute=" + educationInstitute
				+ ", educationLocation=" + educationLocation + ", educationDate=" + educationDate + ", visaStatus="
				+ visaStatus + ", noticePeriod=" + noticePeriod + ", expectedSalary=" + expectedSalary
				+ ", certification=" + certification + ", skills=" + skills + ", additionalInfo=" + additionalInfo
				+ ", date=" + date + ", profileImagePath=" + profileImagePath + ", resumePath=" + resumePath + "]";
	}

	public UserProfile(Long id, String userName, String summary, String personalInfo, String salaryDetails,
			String workExperience, String educationDegree, String educationInstitute, String educationLocation,
			String educationDate, String visaStatus, String noticePeriod, String expectedSalary, String certification,
			String skills, String additionalInfo, String date, String profileImagePath, String resumePath) {
		super();
		this.id = id;
		this.userName = userName;
		this.summary = summary;
		this.personalInfo = personalInfo;
		this.salaryDetails = salaryDetails;
		this.workExperience = workExperience;
		this.educationDegree = educationDegree;
		this.educationInstitute = educationInstitute;
		this.educationLocation = educationLocation;
		this.educationDate = educationDate;
		this.visaStatus = visaStatus;
		this.noticePeriod = noticePeriod;
		this.expectedSalary = expectedSalary;
		this.certification = certification;
		this.skills = skills;
		this.additionalInfo = additionalInfo;
		this.date = date;
		this.profileImagePath = profileImagePath;
		this.resumePath = resumePath;
	}

	
}
