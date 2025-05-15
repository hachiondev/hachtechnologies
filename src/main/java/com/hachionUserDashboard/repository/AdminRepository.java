

package com.hachionUserDashboard.repository;

import com.hachionUserDashboard.entity.Admin;


import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {


	   Admin findByEmail(String email);

	    // Method to find a user by email and password
	    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
	    Optional<Admin> findOneByEmailAndPassword(@Param("email") String email, @Param("password") String password);
	
	
}