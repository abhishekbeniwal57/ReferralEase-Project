package com.example.Project1.Service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Project1.Dto.LoginDTO;
import com.example.Project1.Dto.UserDTO;
import com.example.Project1.Entity.User;
import com.example.Project1.Repo.UserRepo;
import com.example.Project1.Service.UserService;
import com.example.Project1.response.LoginResponse;

@Service
public class UserIMPL implements UserService{

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	@Override
	public String addUser(UserDTO userDTO) {
		
		User user = new User(
				
			userDTO.getUserid(),
			userDTO.getFirstname(),
			userDTO.getLastname(),
			userDTO.getEmail(),
			this.passwordEncoder.encode(userDTO.getPassword())

		);
		
		userRepo.save(user);
		
		return user.getFirstname();
	}

	@Override
	public LoginResponse loginUser(LoginDTO loginDTO) {
		String msg ="";
		User user1 = userRepo.findByEmail(loginDTO.getEmail());
		if(user1 != null) {
			String password = loginDTO.getPassword();
			String encodedPassword = user1.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight) {
				Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
				if(user.isPresent()) {
					return new LoginResponse("Login Success", true);
				}else {
					return new LoginResponse("Login Failed",false);
				}
			}else {
				return new LoginResponse("Password Not Match",false);
			}
		}else {
				return new LoginResponse("Email not exists",false);
		}
	}
}
