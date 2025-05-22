package com.hachionUserDashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hachionUserDashboard.entity.Blogs;
import com.hachionUserDashboard.entity.Contact;

public interface ContactUsRepository extends JpaRepository <Contact,Integer> {

}
