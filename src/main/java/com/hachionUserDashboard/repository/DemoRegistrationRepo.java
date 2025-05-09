package com.hachionUserDashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hachionUserDashboard.entity.DemoRegister;

public interface DemoRegistrationRepo extends JpaRepository <DemoRegister,Integer> {

}
