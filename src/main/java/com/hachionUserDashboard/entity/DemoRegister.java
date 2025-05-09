package com.hachionUserDashboard.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "demoregister")
public class DemoRegister {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int student_id;
	    
	    
	    @Column
	    private String first_name;
	    
	    
	    @Column
	    private String last_name;
	    
	    @Column
	    private String type;
	    
	    @Column
	    private String email;
	    
	    @Column
	    private String number;
	    
		 @Column(name = "date")  // Ensure the name matches your SQL column
		    private LocalDate date;

		 public DemoRegister() {
			 }

		public int getStudent_id() {
			return student_id;
		}

		public void setStudent_id(int student_id) {
			this.student_id = student_id;
		}

		public String getFirst_name() {
			return first_name;
		}

		public void setFirst_name(String first_name) {
			this.first_name = first_name;
		}

		public String getLast_name() {
			return last_name;
		}

		public void setLast_name(String last_name) {
			this.last_name = last_name;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getNumber() {
			return number;
		}

		public void setNumber(String number) {
			this.number = number;
		}

		public LocalDate getDate() {
			return date;
		}

		public void setDate(LocalDate date) {
			this.date = date;
		}

		public DemoRegister(int student_id, String first_name, String last_name, String type, String email,
				String number, LocalDate date) {
			super();
			this.student_id = student_id;
			this.first_name = first_name;
			this.last_name = last_name;
			this.type = type;
			this.email = email;
			this.number = number;
			this.date = date;
		}

		@Override
		public String toString() {
			return "DemoRegister [student_id=" + student_id + ", first_name=" + first_name + ", last_name=" + last_name
					+ ", type=" + type + ", email=" + email + ", number=" + number + ", date=" + date + "]";
		}
		 }
