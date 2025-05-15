package com.hachionUserDashboard.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hachionUserDashboard.entity.User;

@Repository
public interface UserRepository extends ListCrudRepository<User, Long> {

	User findByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE u.email = :email")
	Optional<User> findByEmailForProfile(String email);

	@Query("SELECT u FROM User u WHERE u.email = :email")
	Optional<User> findBYEmailForOauth(@Param("email") String email);

	@Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
	Optional<User> findOneByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM user_tbl WHERE otp_status = false", nativeQuery = true)
	int deleteExpiredOtps();

	@Query(value = "SELECT student_id FROM user_tbl WHERE student_id IS NOT NULL ORDER BY LENGTH(student_id) DESC, student_id DESC LIMIT 1", nativeQuery = true)
	String findTopByOrderByStudentIdDesc();

}
