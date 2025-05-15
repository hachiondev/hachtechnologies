package com.hachionUserDashboard.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "blogs")
public class Blogs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column // Ensure the field is required and set a max length
	private String category_name;

	@Column // Ensure the field is required and set a max length
	private String title;

	@Column // Ensure the field is required and set a max length
	private String author;

	@Column // Ensure the field is required
	private String blog_image; // URL or file path to the image


	@Column(nullable = true, columnDefinition = "LONGTEXT") // Allow longer descriptions
	private String description;

	@Column(name = "date", nullable = false)
	private LocalDate date;
	
	public Blogs() {
		
	}

	public Blogs(int id, String category_name, String title, String author, String blog_image, String description,
			LocalDate date) {
		super();
		this.id = id;
		this.category_name = category_name;
		this.title = title;
		this.author = author;
		this.blog_image = blog_image;
		this.description = description;
		this.date = date;
	}

	@Override
	public String toString() {
		return "Blogs [id=" + id + ", category_name=" + category_name + ", title=" + title + ", author=" + author
				+ ", blog_image=" + blog_image + ", description=" + description + ", date=" + date + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getBlog_image() {
		return blog_image;
	}

	public void setBlog_image(String blog_image) {
		this.blog_image = blog_image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
}

