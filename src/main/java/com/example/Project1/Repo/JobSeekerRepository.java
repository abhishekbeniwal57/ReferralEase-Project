package com.example.Project1.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.Project1.Entity.JobSeeker;

@EnableJpaRepositories
@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeeker,Integer> {

	Optional<JobSeeker> findOneByEmailAndPassword(String email,String password);
	
	JobSeeker findByEmail(String email);
}