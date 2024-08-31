package com.example.Project1.Service;

import java.util.List;

import com.example.Project1.Dto.ReferralRequestDTO;

public interface ReferralRequestService {
    String sendReferralRequest(String jobseekerEmail, ReferralRequestDTO referralRequestDTO);

    // New method
    List<ReferralRequestDTO> getReferralRequestsByEmployeeId(int employeeId);
}
