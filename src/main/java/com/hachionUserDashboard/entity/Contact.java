package com.hachionUserDashboard.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contactus")
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column // Ensure the field is required and set a max length
	private String name;

	@Column // Ensure the field is required and set a max length
	private String email;

	@Column // Ensure the field is required and set a max length
	private String mobile;

	@Column // Ensure the field is required
	private String subject; // URL or file path to the image


	@Column(nullable = true, columnDefinition = "LONGTEXT") // Allow longer descriptions
	private String message;

	@Column(name = "date", nullable = false)
	private LocalDate date;
	
	public Contact() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", email=" + email + ", mobile=" + mobile + ", subject="
				+ subject + ", message=" + message + ", date=" + date + "]";
	}

	public Contact(int id, String name, String email, String mobile, String subject, String message, LocalDate date) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.mobile = mobile;
		this.subject = subject;
		this.message = message;
		this.date = date;
	}
}
