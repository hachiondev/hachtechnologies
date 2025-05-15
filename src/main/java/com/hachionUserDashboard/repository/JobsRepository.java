package com.hachionUserDashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hachionUserDashboard.entity.Job;

public interface JobsRepository extends JpaRepository <Job,Integer> {
 

}
