//package com.example.Project1.Service.Impl;
//
//import java.util.List; // Ensure this import is present
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.Project1.Dto.ReferralRequestDTO;
//import com.example.Project1.Entity.Employee;
//import com.example.Project1.Entity.JobSeeker;
//import com.example.Project1.Entity.ReferralRequest;
//import com.example.Project1.Repo.EmployeeRepository;
//import com.example.Project1.Repo.JobSeekerRepository;
//import com.example.Project1.Repo.ReferralRequestRepository;
//import com.example.Project1.Service.ReferralRequestService;
//
//@Service
//public class ReferralRequestServiceImpl implements ReferralRequestService {
//
//    @Autowired
//    private JobSeekerRepository jobSeekerRepo;
//
//    @Autowired
//    private EmployeeRepository employeeRepo;
//
//    @Autowired
//    private ReferralRequestRepository referralRequestRepo;
//
//    @Override
//    public String sendReferralRequest(String jobseekerEmail, ReferralRequestDTO referralRequestDTO) {
//        if (jobseekerEmail == null || referralRequestDTO == null) {
//            throw new IllegalArgumentException("JobSeeker email or ReferralRequestDTO cannot be null");
//        }
//
//        JobSeeker jobSeeker = jobSeekerRepo.findByEmail(jobseekerEmail);
//        if (jobSeeker == null) {
//            return "JobSeeker not found";
//        }
//
//        // Find employees by company name; assuming multiple employees can be associated with the company
//        List<Employee> employees = employeeRepo.findByCompanyname(referralRequestDTO.getCompanyname());
//        if (employees.isEmpty()) {
//            return "No employees found for the specified company";
//        }
//
//        for (Employee employee : employees) {
//            ReferralRequest referralRequest = new ReferralRequest();
//            referralRequest.setJobSeeker(jobSeeker);
//            referralRequest.setCompanyname(referralRequestDTO.getCompanyname());
//            referralRequest.setResumeLink(referralRequestDTO.getResumeLink());
//            referralRequest.setJobId(referralRequestDTO.getJobId());
//            referralRequest.setJobLink(referralRequestDTO.getJobLink());
//            referralRequest.setQualification(referralRequestDTO.getQualification());
//            referralRequest.setAdditionalInfo(referralRequestDTO.getAdditionalInfo());
//            referralRequest.setEmployee(employee);
//
//            referralRequestRepo.save(referralRequest);
//        }
//
//        return "Referral requests sent successfully to all employees in the company";
//    }
//    
//    @Override
//    public List<ReferralRequestDTO> getReferralRequestsByEmployeeId(Long employeeId) {
//        List<ReferralRequest> referralRequests = referralRequestRepo.findByEmployeeId(employeeId);
//        
//        // Conversion to DTO
//        return referralRequests.stream().map(this::convertToDTO).collect(Collectors.toList());
//    }
//
//    private ReferralRequestDTO convertToDTO(ReferralRequest referralRequest) {
//        ReferralRequestDTO dto = new ReferralRequestDTO();
//        dto.setCompanyname(referralRequest.getCompanyname());
//        dto.setResumeLink(referralRequest.getResumeLink());
//        dto.setJobId(referralRequest.getJobId());
//        dto.setJobLink(referralRequest.getJobLink());
//        dto.setQualification(referralRequest.getQualification());
//        dto.setAdditionalInfo(referralRequest.getAdditionalInfo());
//        return dto;
//    }
//}

package com.example.Project1.Service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Project1.Dto.ReferralRequestDTO;
import com.example.Project1.Entity.Employee;
import com.example.Project1.Entity.JobSeeker;
import com.example.Project1.Entity.ReferralRequest;
import com.example.Project1.Repo.EmployeeRepository;
import com.example.Project1.Repo.JobSeekerRepository;
import com.example.Project1.Repo.ReferralRequestRepository;
import com.example.Project1.Service.ReferralRequestService;

@Service
public class ReferralRequestServiceImpl implements ReferralRequestService {

    @Autowired
    private JobSeekerRepository jobSeekerRepo;

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private ReferralRequestRepository referralRequestRepo;
   

    @Override
    public String sendReferralRequest(String jobseekerEmail, ReferralRequestDTO referralRequestDTO) {
        if (jobseekerEmail == null || referralRequestDTO == null) {
            throw new IllegalArgumentException("JobSeeker email or ReferralRequestDTO cannot be null");
        }

        JobSeeker jobSeeker = jobSeekerRepo.findByEmail(jobseekerEmail);
        if (jobSeeker == null) {
            return "JobSeeker not found";
        }

        // Find employees by company name; assuming multiple employees can be associated with the company
        List<Employee> employees = employeeRepo.findByCompanyname(referralRequestDTO.getCompanyname());
        if (employees.isEmpty()) {
            return "No employees found for the specified company";
        }

        for (Employee employee : employees) {
            ReferralRequest referralRequest = new ReferralRequest();
            referralRequest.setJobSeeker(jobSeeker);
            referralRequest.setCompanyname(referralRequestDTO.getCompanyname());
            referralRequest.setResumeLink(referralRequestDTO.getResumeLink());
            referralRequest.setJobId(referralRequestDTO.getJobId());
            referralRequest.setJobLink(referralRequestDTO.getJobLink());
            referralRequest.setQualification(referralRequestDTO.getQualification());
            referralRequest.setAdditionalInfo(referralRequestDTO.getAdditionalInfo());
            referralRequest.setEmployee(employee);

            referralRequestRepo.save(referralRequest);
        }

        return "Referral requests sent successfully to all employees in the company";
    }
    
    @Override
    public List<ReferralRequestDTO> getReferralRequestsByEmployeeId(int employeeId) {
        List<ReferralRequest> referralRequests = referralRequestRepo.findByEmployeeUserid(employeeId);

        // Convert ReferralRequest entities to ReferralRequestDTOs
        return referralRequests.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private ReferralRequestDTO convertToDTO(ReferralRequest referralRequest) {
        ReferralRequestDTO dto = new ReferralRequestDTO();
        dto.setCompanyname(referralRequest.getCompanyname());
        dto.setResumeLink(referralRequest.getResumeLink());
        dto.setJobId(referralRequest.getJobId());
        dto.setJobLink(referralRequest.getJobLink());
        dto.setQualification(referralRequest.getQualification());
        dto.setAdditionalInfo(referralRequest.getAdditionalInfo());
        return dto;
    }
    
}

