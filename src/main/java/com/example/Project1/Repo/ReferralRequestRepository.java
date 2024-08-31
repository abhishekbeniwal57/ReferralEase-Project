package com.example.Project1.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Project1.Dto.ReferralRequestDTO;
import com.example.Project1.Entity.ReferralRequest;

public interface ReferralRequestRepository extends JpaRepository<ReferralRequest, Integer> {
	
	// Method to find referral requests by employee ID
    List<ReferralRequest> findByEmployeeUserid(int userid);

}
