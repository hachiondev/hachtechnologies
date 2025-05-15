
package com.hachionUserDashboard.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.hachionUserDashboard.entity.Blogs;
import com.hachionUserDashboard.repository.BlogsRepository;


@RequestMapping()
@CrossOrigin
//@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class BlogsController {

	@Autowired
	private BlogsRepository repo;

	@GetMapping("/blog/{id}")
	public ResponseEntity<Blogs> getBlog(@PathVariable Integer id) {
		return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}

	@GetMapping("/blog")
	public List<Blogs> getAllBlogs() {
		return repo.findAll();
	}

	private final String uploadDir = System.getProperty("user.home") + "/uploads/blogs/";

	private String saveFile(MultipartFile file, String subFolder) throws IOException {
		if (file != null && !file.isEmpty()) {
			// Ensure the directory exists
			File directory = new File(uploadDir + subFolder);
			if (!directory.exists()) {
				directory.mkdirs();
			}

			// Save file
			Path filePath = Paths.get(directory.getAbsolutePath(), file.getOriginalFilename());
			Files.write(filePath, file.getBytes());
			return subFolder + "/" + file.getOriginalFilename();
		}
		return null;
	}
	@PostMapping("blog/add")
	public ResponseEntity<String> addBlog(
	        @RequestPart("blogData") String blogData,
	        @RequestPart(value = "blogImage", required = false) MultipartFile blogImage)
	       {
	    try {
	        ObjectMapper objectMapper = new ObjectMapper();
	        objectMapper.registerModule(new JavaTimeModule());
	        Blogs blog = objectMapper.readValue(blogData, Blogs.class);

	        if (blogImage != null && !blogImage.isEmpty()) {
	            String imagePath = saveFile(blogImage, "images");
	            if (imagePath != null) {
	                blog.setBlog_image(imagePath);
	            } else {
	                return ResponseEntity.badRequest().body("Failed to save image.");
	            }
	        } else {
	            blog.setBlog_image("");
	        }

	   

	        repo.save(blog);
	        return ResponseEntity.status(HttpStatus.CREATED).body("Blog added successfully.");
	    } catch (Exception e) {
	        e.printStackTrace();
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding blog: " + e.getMessage());
	    }
	}


	@PostMapping("/blog/update/{id}")
	public ResponseEntity<?> updateBlogs(
	    @PathVariable int id,
	    @RequestPart("blogData") String blogData,
	    @RequestPart(value = "blogImage", required = false) MultipartFile blogImage) {

	    return repo.findById(id).map(blog -> {
	        try {
	            ObjectMapper objectMapper = new ObjectMapper();
	            Blogs updatedBlog = objectMapper.readValue(blogData, Blogs.class);

	            // Update fields
	            blog.setCategory_name(updatedBlog.getCategory_name());
	            blog.setTitle(updatedBlog.getTitle());
	            blog.setAuthor(updatedBlog.getAuthor());
	            blog.setDescription(updatedBlog.getDescription());
	            blog.setDate(updatedBlog.getDate());

	            // Replace old image if new one is uploaded
	            if (blogImage != null && !blogImage.isEmpty()) {
	                String oldImagePath = blog.getBlog_image();
	                if (oldImagePath != null) {
	                    Path oldImage = Paths.get(System.getProperty("user.home") + "/uploads/blogs/" + oldImagePath);
	                    Files.deleteIfExists(oldImage);
	                }

	                String imageName = saveFile(blogImage, "blogs"); // ensure correct folder
	                blog.setBlog_image(imageName);
	            }

	            repo.save(blog);
	            return ResponseEntity.ok(blog);
	        } catch (IOException e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating blog: " + e.getMessage());
	        }
	    }).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body("Blog not found with ID: " + id));
	}

	@DeleteMapping("blog/delete/{id}")
	public ResponseEntity<?> deleteBlog(@PathVariable int id) {
		Blogs blog = repo.findById(id).get();
		repo.delete(blog);
		return null;

	}

}