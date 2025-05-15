package com.hachionUserDashboard.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hachionUserDashboard.entity.Job;
import com.hachionUserDashboard.repository.JobsRepository;

@CrossOrigin
@RestController
public class JobsController {

    

    @Autowired
    private JobsRepository repo;


    @GetMapping("/jobpost/{id}")
    public ResponseEntity<Job> getJob(@PathVariable Integer id) {
        return repo.findById(id)
                   .map(ResponseEntity::ok)
                   .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/jobpost")
    public List<Job> getAllJob() {
        return repo.findAll();
    }

    @PostMapping("/jobpost/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createJob(@RequestBody Job job) {
        repo.save(job);
    }

    @PutMapping("/jobpost/update/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable int id, @RequestBody Job updatedJob) {
        return repo.findById(id).map(job -> {
            job.setCompany(updatedJob.getCompany());
            job.setJob_title(updatedJob.getJob_title());
        job.setExperience(updatedJob.getExperience());
        job.setLocation(updatedJob.getLocation());
        job.setPhone(updatedJob.getPhone());
        job.setSalary(updatedJob.getSalary());
        job.setCandidate_email(updatedJob.getCandidate_email());
        job.setCandidate_name(updatedJob.getCandidate_name());
        job.setCandidate_phone(updatedJob.getCandidate_phone());
        job.setEmail(updatedJob.getEmail());
        job.setWork_type(updatedJob.getWork_type());
        job.setResume(updatedJob.getResume());
            repo.save(job);
            return ResponseEntity.ok(job);
        }).orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @DeleteMapping("/jobpost/delete/{id}") public ResponseEntity<?>
    deleteJob(@PathVariable int id) { Job job=
    repo.findById(id).get(); repo.delete(job); return null;
    
    }
}