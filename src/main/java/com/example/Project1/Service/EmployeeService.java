package com.example.Project1.Service;

import java.util.List;

import com.example.Project1.Dto.EmployeeLoginDTO;
import com.example.Project1.Dto.EmployeeRegisterDTO;
import com.example.Project1.Entity.Employee;
import com.example.Project1.Entity.ReferralRequest;
import com.example.Project1.response.EmployeeLoginResponse;
import com.example.Project1.response.EmployeeProfileEditResponse;
import com.example.Project1.response.EmployeeProfileResponse;

public interface EmployeeService {

	String addUser(EmployeeRegisterDTO userDTO);

	EmployeeLoginResponse loginUser(EmployeeLoginDTO loginDTO);
	
	EmployeeProfileResponse getLoggedInEmployee(String email);

	EmployeeProfileEditResponse getEmployeeForEdit(String email);

    void updateEmployeeProfile(String email, EmployeeProfileEditResponse updatedProfile);
    

}
