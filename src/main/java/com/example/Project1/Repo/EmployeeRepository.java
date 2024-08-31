package com.example.Project1.Repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.Project1.Entity.Employee;

@EnableJpaRepositories
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

	Optional<Employee> findOneByEmailAndPassword(String email,String password);
	
	Employee findByEmail(String email);
	
    List<Employee> findByCompanyname(String companyname);

}
