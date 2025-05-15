package com.hachionUserDashboard.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jobspost")
public class Job {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int job_id;
	    
	    
	    @Column
	    private String company;
	    
	    @Column
	    private String job_title;
	    
	    @Column
	    private String location;
	    
	    @Column
	    private String salary;
	    
	    @Column
	    private String experience;
	    
	    @Column
	    private String email;
	    @Column
	    private String phone;
	    @Column
	    private String candidate_email;
	    @Column
	    private String candidate_name;
	    @Column
	    private String candidate_phone;
	    @Column
	    private String resume;
	    @Column
	    private String work_type;
	    
	    
	    public Job(String work_type) {
			super();
			this.work_type = work_type;
		}

		public String getWork_type() {
			return work_type;
		}

		public void setWork_type(String work_type) {
			this.work_type = work_type;
		}

		@Column(name = "date")  // Make sure the name matches your SQL column
	    private LocalDate date;

public Job() {
	
}

public int getJob_id() {
	return job_id;
}



public Job(int job_id, String company, String job_title, String location, String salary, String experience,
		String email, String phone, String candidate_email, String candidate_name, String candidate_phone,
		String resume, String work_type, LocalDate date) {
	super();
	this.job_id = job_id;
	this.company = company;
	this.job_title = job_title;
	this.location = location;
	this.salary = salary;
	this.experience = experience;
	this.email = email;
	this.phone = phone;
	this.candidate_email = candidate_email;
	this.candidate_name = candidate_name;
	this.candidate_phone = candidate_phone;
	this.resume = resume;
	this.work_type = work_type;
	this.date = date;
}

@Override
public String toString() {
	return "Job [job_id=" + job_id + ", company=" + company + ", job_title=" + job_title + ", location=" + location
			+ ", salary=" + salary + ", experience=" + experience + ", email=" + email + ", phone=" + phone
			+ ", candidate_email=" + candidate_email + ", candidate_name=" + candidate_name + ", candidate_phone="
			+ candidate_phone + ", resume=" + resume + ", work_type=" + work_type + ", date=" + date + "]";
}

public void setJob_id(int job_id) {
	this.job_id = job_id;
}

public String getCompany() {
	return company;
}

public void setCompany(String company) {
	this.company = company;
}

public String getJob_title() {
	return job_title;
}

public void setJob_title(String job_title) {
	this.job_title = job_title;
}

public String getLocation() {
	return location;
}

public void setLocation(String location) {
	this.location = location;
}

public String getSalary() {
	return salary;
}

public void setSalary(String salary) {
	this.salary = salary;
}

public String getExperience() {
	return experience;
}

public void setExperience(String experience) {
	this.experience = experience;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPhone() {
	return phone;
}

public void setPhone(String phone) {
	this.phone = phone;
}

public String getCandidate_email() {
	return candidate_email;
}

public void setCandidate_email(String candidate_email) {
	this.candidate_email = candidate_email;
}

public String getCandidate_name() {
	return candidate_name;
}

public void setCandidate_name(String candidate_name) {
	this.candidate_name = candidate_name;
}

public String getCandidate_phone() {
	return candidate_phone;
}

public void setCandidate_phone(String candidate_phone) {
	this.candidate_phone = candidate_phone;
}

public String getResume() {
	return resume;
}

public void setResume(String resume) {
	this.resume = resume;
}

public LocalDate getDate() {
	return date;
}

public void setDate(LocalDate date) {
	this.date = date;
}
}
