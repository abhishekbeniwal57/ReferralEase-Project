package com.example.Project1.Service;

import com.example.Project1.Dto.LoginDTO;
import com.example.Project1.Dto.UserDTO;
import com.example.Project1.response.LoginResponse;

public interface UserService {

	String addUser(UserDTO userDTO);

	LoginResponse loginUser(LoginDTO loginDTO);
	
}
