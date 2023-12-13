package com.example.Project1.EmployeeController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Project1.Dto.LoginDTO;
import com.example.Project1.Dto.UserDTO;
import com.example.Project1.Service.UserService;
import com.example.Project1.response.LoginResponse;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/employee")

public class Controller {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/save")
	public String saveUser(@RequestBody UserDTO userDTO)
	{
		String id = userService.addUser(userDTO);
		return id;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
	{
		LoginResponse loginResponse = userService.loginUser(loginDTO);
		return ResponseEntity.ok(loginResponse);
	}
}
