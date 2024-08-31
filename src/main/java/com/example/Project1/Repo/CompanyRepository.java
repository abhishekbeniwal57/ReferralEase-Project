package com.example.Project1.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.Project1.Entity.Company;

@EnableJpaRepositories
@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
	
}
