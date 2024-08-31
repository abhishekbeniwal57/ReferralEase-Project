package com.example.Project1.EmployeeController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Project1.Dto.EmployeeLoginDTO;
import com.example.Project1.Dto.JobSeekerLoginDTO;
import com.example.Project1.Dto.EmployeeRegisterDTO;
import com.example.Project1.Dto.JobSeekerRegisterDTO;
import com.example.Project1.Dto.ReferralRequestDTO;
import com.example.Project1.Entity.Company;
import com.example.Project1.Entity.JobSeeker;
import com.example.Project1.Service.CompanyService;
import com.example.Project1.Service.EmployeeService;
import com.example.Project1.Service.JobSeekerService;
import com.example.Project1.Service.ReferralRequestService;
import com.example.Project1.response.EmployeeLoginResponse;
import com.example.Project1.response.EmployeeProfileEditResponse;
import com.example.Project1.response.EmployeeProfileResponse;
import com.example.Project1.response.JobSeekerProfileEditResponse;
import com.example.Project1.response.JobSeekerProfileResponse;
import com.example.Project1.response.JobseekerLoginResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/v1")

public class Controller {
	
	@Autowired
	private JobSeekerService userService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private CompanyService companyService;
	 
	@Autowired
    private ReferralRequestService referralRequestService; 
	 
	 //	----------  JobSeeker  ----------
	
	// JobSeeker Save/register 
	@PostMapping("/save-jobseeker")
	public String saveUser(@RequestBody JobSeekerRegisterDTO userDTO)
	{
		String id = userService.addUser(userDTO);
		return id;
	}
	
	// JobSeeker Login 
	@PostMapping("/login-jobseeker")
	public ResponseEntity<?> loginUser(@RequestBody JobSeekerLoginDTO loginDTO)
	{
		JobseekerLoginResponse loginResponse = userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	// JobSeeker Profile
//	@GetMapping("/jobseeker/profile")
//    public ResponseEntity<JobSeekerProfileResponse> getLoggedInJobSeeker(@RequestParam String email) {
//        JobSeekerProfileResponse responseDTO = userService.getLoggedInJobSeeker(email);
//
//        if (responseDTO != null) {
//            return ResponseEntity.ok(responseDTO);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
	@GetMapping("/jobseeker/profile")
	public ResponseEntity<JobSeekerProfileResponse> getLoggedInJobSeeker(@RequestParam String email) {
	    System.out.println("Received request for email: " + email); // Debugging log
	    JobSeekerProfileResponse responseDTO = userService.getLoggedInJobSeeker(email);

	    if (responseDTO != null) {
	        return ResponseEntity.ok(responseDTO);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}

	
	 // Get JobSeeker Profile for Editing
    @GetMapping("/jobseeker-profile/edit")
    public ResponseEntity<JobSeekerProfileEditResponse> getJobSeekerForEdit(@RequestParam String email) {
        JobSeekerProfileEditResponse existingProfile = userService.getJobSeekerForEdit(email);

        if (existingProfile != null) {
            return ResponseEntity.ok(existingProfile);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    

    // Update JobSeeker Profile
    @PutMapping("/jobseeker-profile/update")
    public ResponseEntity<String> updateJobSeekerProfile(
            @RequestParam String email,
            @RequestBody JobSeekerProfileEditResponse updatedProfile
    ) {
        userService.updateJobSeekerProfile(email, updatedProfile);
        return ResponseEntity.ok("Profile updated successfully");
    }
    
    
    // Company - listing
    @GetMapping("/companies")
    public List<Company> getAllCompany() {
        return companyService.getAllCompany();
    }
    
     
     // Referral Request
     @PostMapping("/referral/request")
     public ResponseEntity<String> sendReferralRequest(@RequestParam("jobseekerEmail") String jobseekerEmail,
                                                       @RequestBody ReferralRequestDTO referralRequestDTO) {
         String response = referralRequestService.sendReferralRequest(jobseekerEmail, referralRequestDTO);
         return ResponseEntity.ok(response);
     }
     
     @GetMapping("/referral/requests/{employeeId}")
     public ResponseEntity<List<ReferralRequestDTO>> getReferralRequestsByEmployee(@PathVariable int employeeId) {
         List<ReferralRequestDTO> requests = referralRequestService.getReferralRequestsByEmployeeId(employeeId);
         return ResponseEntity.ok(requests);
     }
	
//	----------  Employee  ----------
	
	// Employee Save/register 
	@PostMapping("/save-employee")
	public String saveUser(@RequestBody EmployeeRegisterDTO userDTO)
	{
		String id = employeeService.addUser(userDTO);
		return id;
	}
	
	// Employee Login
	@PostMapping("/login-employee")
	public ResponseEntity<?> loginUser(@RequestBody EmployeeLoginDTO loginDTO)
	{
		EmployeeLoginResponse loginResponse = employeeService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
	
	// Employee Profile
	@GetMapping("/employee/profile")
	   public ResponseEntity<EmployeeProfileResponse> getLoggedInEmployee(@RequestParam String email) {
	       EmployeeProfileResponse responseDTO = employeeService.getLoggedInEmployee(email);

	     if (responseDTO != null) {
	         return ResponseEntity.ok(responseDTO);
	     } else {
	    	 return ResponseEntity.notFound().build();
	     }
	 }
	
	// Get Employee Profile for Editing
    @GetMapping("/employee-profile/edit")
    public ResponseEntity<EmployeeProfileEditResponse> getEmployeeForEdit(@RequestParam String email) {
    	EmployeeProfileEditResponse existingProfile = employeeService.getEmployeeForEdit(email);

        if (existingProfile != null) {
            return ResponseEntity.ok(existingProfile);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update Employee Profile
    @PutMapping("/employee-profile/update")
    public ResponseEntity<String> updateEmployeeProfile(
            @RequestParam String email,
            @RequestBody EmployeeProfileEditResponse updatedProfile
    ) {
        employeeService.updateEmployeeProfile(email, updatedProfile);
        return ResponseEntity.ok("Profile updated successfully");
    }
//	// Get Employee Profile for Editing
//    @GetMapping("/employee-profile/edit")
//    public ResponseEntity<EmployeeRegisterDTO> getEmployeeForEdit(@RequestParam String email) {
//        EmployeeRegisterDTO existingProfile = employeeService.getEmployeeForEdit(email);
//
//        if (existingProfile != null) {
//            return ResponseEntity.ok(existingProfile);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    // Update Employee Profile
//    @PutMapping("/employee-profile/update")
//    public ResponseEntity<String> updateEmployeeProfile(
//            @RequestParam String email,
//            @RequestBody EmployeeRegisterDTO updatedProfile
//    ) {
//        employeeService.updateEmployeeProfile(email, updatedProfile);
//        return ResponseEntity.ok("Profile updated successfully");
//    }
	
    }
   