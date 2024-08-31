package com.example.Project1.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Project1.Dto.EmployeeLoginDTO;
import com.example.Project1.Dto.EmployeeRegisterDTO;
import com.example.Project1.Entity.Employee;
import com.example.Project1.Entity.ReferralRequest;
import com.example.Project1.Repo.EmployeeRepository;
import com.example.Project1.Repo.ReferralRequestRepository;
import com.example.Project1.Service.EmployeeService;
import com.example.Project1.response.EmployeeLoginResponse;
import com.example.Project1.response.EmployeeProfileEditResponse;
import com.example.Project1.response.EmployeeProfileResponse;


@Service
public class EmployeeIMPL implements EmployeeService{

	@Autowired
	private EmployeeRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	
	
	// Employee Save/register 
	@Override
	public String addUser(EmployeeRegisterDTO userDTO) {
		
		Employee user = new Employee(
				
			userDTO.getUserid(),
			userDTO.getFirstname(),
			userDTO.getLastname(),
			userDTO.getCompanyname(),
			userDTO.getEmail(),
			this.passwordEncoder.encode(userDTO.getPassword()), null

		);
		
		userRepo.save(user);
		
		//return user.getFirstname();
        return "Signup Success";

	}

	// Employee Login
	@Override
	public EmployeeLoginResponse loginUser(EmployeeLoginDTO loginDTO) {
		String msg ="";
		Employee user1 = userRepo.findByEmail(loginDTO.getEmail());
		if(user1 != null) {
			String password = loginDTO.getPassword();
			String encodedPassword = user1.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight) {
				Optional<Employee> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
				if(user.isPresent()) {
					return new EmployeeLoginResponse("Login Success", true);
				}else {
					return new EmployeeLoginResponse("Login Failed",false);
				}
			}else {
				return new EmployeeLoginResponse("Password Not Match",false);
			}
		}else {
				return new EmployeeLoginResponse("Email not exists",false);
		}
	}

	@Override
	public EmployeeProfileResponse getLoggedInEmployee(String email) {
		Employee employee = userRepo.findByEmail(email);

        if (employee != null) {
            return convertToResponseDTO(employee);
        } else {
            return null;  // or throw an exception, depending on your design
        }
	}

	// Employee Profile
	private EmployeeProfileResponse convertToResponseDTO(Employee employee) {
		EmployeeProfileResponse responseDTO = new EmployeeProfileResponse();
        responseDTO.setUserid(employee.getUserid());
        responseDTO.setFirstname(employee.getFirstname());
        responseDTO.setLastname(employee.getLastname());
        responseDTO.setCompanyname(employee.getCompanyname());
        responseDTO.setEmail(employee.getEmail());
        responseDTO.setLevel(employee.getLevel());
        return responseDTO;
	}
	
	// Get Employee Profile for Editing
		@Override
		public EmployeeProfileEditResponse getEmployeeForEdit(String email) {
			Employee employee = userRepo.findByEmail(email);

	        if (employee != null) {
	            return convertToDTO(employee);
	        } else {
	            return null;
	        }
		}

	    // Update Employee Profile
		@Override
		public void updateEmployeeProfile(String email, EmployeeProfileEditResponse updatedProfile) {
			Employee employee = userRepo.findByEmail(email);

	        if (employee != null) {
	            // Update the fields with new values
	            employee.setFirstname(updatedProfile.getFirstname());
	            employee.setLastname(updatedProfile.getLastname());
	            employee.setCompanyname(updatedProfile.getCompanyname());
	            employee.setEmail(updatedProfile.getEmail());
	            employee.setLevel(updatedProfile.getLevel());


	            // Save the updated entity
	            userRepo.save(employee);
	        }
		}
		
		private EmployeeProfileEditResponse convertToDTO(Employee employee) {
			EmployeeProfileEditResponse dto = new EmployeeProfileEditResponse();
	        dto.setFirstname(employee.getFirstname());
	        dto.setLastname(employee.getLastname());
	        dto.setCompanyname(employee.getCompanyname());
	        dto.setEmail(employee.getEmail());
	        dto.setLevel(employee.getLevel());


	        return dto;
	    }

	
}

