//package com.example.Project1.Service.Impl;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.example.Project1.Dto.JobSeekerLoginDTO;
//import com.example.Project1.Dto.JobSeekerRegisterDTO;
//import com.example.Project1.Entity.JobSeeker;
//import com.example.Project1.Repo.JobSeekerRepository;
//import com.example.Project1.Service.JobSeekerService;
//import com.example.Project1.response.JobSeekerProfileEditResponse;
//import com.example.Project1.response.JobSeekerProfileResponse;
//import com.example.Project1.response.JobseekerLoginResponse;
//
//@Service
//public class JobSeekerIMPL implements JobSeekerService {
//
//    @Autowired
//    private JobSeekerRepository userRepo;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder; 
//
//    // JobSeeker Save/register 
//    @Override
//    public String addUser(JobSeekerRegisterDTO userDTO) {
//        JobSeeker user = new JobSeeker(
//            userDTO.getUserid(),
//            userDTO.getFirstname(),
//            userDTO.getLastname(),
//            userDTO.getEmail(),
//            this.passwordEncoder.encode(userDTO.getPassword()), 
//            null, 
//            null
//        );
//
//        userRepo.save(user);
//        return "Signup Success";
//    }
//
//    // JobSeeker Login 
//    @Override
//    public JobseekerLoginResponse loginUser(JobSeekerLoginDTO loginDTO) {
//        JobSeeker user = userRepo.findByEmail(loginDTO.getEmail());
//
//        if (user == null) {
//            return new JobseekerLoginResponse("Email not exists", false);
//        }
//
//        boolean isPwdRight = passwordEncoder.matches(loginDTO.getPassword(), user.getPassword());
//        if (isPwdRight) {
//            return new JobseekerLoginResponse("Login Success", true);
//        } else {
//            return new JobseekerLoginResponse("Password Not Match", false);
//        }
//    }
//
//    // JobSeeker Profile
//    @Override
//    public JobSeekerProfileResponse getLoggedInJobSeeker(String email) {
//        JobSeeker jobSeeker = userRepo.findByEmail(email);
//        return jobSeeker != null ? convertToProfileResponseDTO(jobSeeker) : null; // Consider throwing exception here
//    }
//
//    private JobSeekerProfileResponse convertToProfileResponseDTO(JobSeeker jobSeeker) {
//        JobSeekerProfileResponse responseDTO = new JobSeekerProfileResponse();
//        responseDTO.setUserid(jobSeeker.getUserid());
//        responseDTO.setFirstname(jobSeeker.getFirstname());
//        responseDTO.setLastname(jobSeeker.getLastname());
//        responseDTO.setEmail(jobSeeker.getEmail());
//        responseDTO.setResumeLink(jobSeeker.getResumeLink());
//        responseDTO.setDiscipline(jobSeeker.getDiscipline());
//        return responseDTO;
//    }
//
//    // Get JobSeeker Profile for Editing
//    @Override
//    public JobSeekerProfileEditResponse getJobSeekerForEdit(String email) {
//        JobSeeker jobSeeker = userRepo.findByEmail(email);
//        return jobSeeker != null ? convertToEditResponseDTO(jobSeeker) : null; // Consider throwing exception here
//    }
//
//    // Update JobSeeker Profile
//    @Override
//    public void updateJobSeekerProfile(String email, JobSeekerProfileEditResponse updatedProfile) {
//        JobSeeker jobSeeker = userRepo.findByEmail(email);
//
//        if (jobSeeker != null) {
//            jobSeeker.setFirstname(updatedProfile.getFirstname());
//            jobSeeker.setLastname(updatedProfile.getLastname());
//            jobSeeker.setEmail(updatedProfile.getEmail());
//            jobSeeker.setResumeLink(updatedProfile.getResumeLink());
//            jobSeeker.setDiscipline(updatedProfile.getDiscipline());
//
//            userRepo.save(jobSeeker);
//        }
//    }
//
//    private JobSeekerProfileEditResponse convertToEditResponseDTO(JobSeeker jobSeeker) {
//        JobSeekerProfileEditResponse dto = new JobSeekerProfileEditResponse();
//        dto.setFirstname(jobSeeker.getFirstname());
//        dto.setLastname(jobSeeker.getLastname());
//        dto.setEmail(jobSeeker.getEmail());
//        dto.setResumeLink(jobSeeker.getResumeLink());
//        dto.setDiscipline(jobSeeker.getDiscipline());
//        return dto;
//    }
//}
//


package com.example.Project1.Service.Impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Project1.Dto.JobSeekerLoginDTO;
import com.example.Project1.Dto.JobSeekerRegisterDTO;
import com.example.Project1.Entity.JobSeeker;
import com.example.Project1.Repo.JobSeekerRepository;
import com.example.Project1.Service.JobSeekerService;
import com.example.Project1.response.JobSeekerProfileEditResponse;
import com.example.Project1.response.JobSeekerProfileResponse;
import com.example.Project1.response.JobseekerLoginResponse;


@Service
public class JobSeekerIMPL implements JobSeekerService{

	@Autowired
	private JobSeekerRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	
	// JobSeeker Save/register 
	@Override
	public String addUser(JobSeekerRegisterDTO userDTO) {
		
		JobSeeker user = new JobSeeker(
				
			userDTO.getUserid(),
			userDTO.getFirstname(),
			userDTO.getLastname(),
			userDTO.getEmail(),
			this.passwordEncoder.encode(userDTO.getPassword()), null, null

		);
		
		userRepo.save(user);
		
		//return user.getFirstname();
        return "Signup Success";

	}

	// JobSeeker Login 
	@Override
	public JobseekerLoginResponse loginUser(JobSeekerLoginDTO loginDTO) {
		String msg ="";
		JobSeeker user1 = userRepo.findByEmail(loginDTO.getEmail());
		if(user1 != null) {
			String password = loginDTO.getPassword();
			String encodedPassword = user1.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight) {
				Optional<JobSeeker> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
				if(user.isPresent()) {
					return new JobseekerLoginResponse("Login Success", true);
				}else {
					return new JobseekerLoginResponse("Login Failed",false);
				}
			}else {
				return new JobseekerLoginResponse("Password Not Match",false);
			}
		}else {
				return new JobseekerLoginResponse("Email not exists",false);
		}
	}

	// JobSeeker Profile
	@Override
	public JobSeekerProfileResponse getLoggedInJobSeeker(String email) {
		JobSeeker jobSeeker = userRepo.findByEmail(email);

        if (jobSeeker != null) {
            return convertToResponseDTO(jobSeeker);
        } else {
            return null;  // or throw an exception, depending on your design
        }
	}

	private JobSeekerProfileResponse convertToResponseDTO(JobSeeker jobSeeker) {
		JobSeekerProfileResponse responseDTO = new JobSeekerProfileResponse();
        responseDTO.setUserid(jobSeeker.getUserid());
        responseDTO.setFirstname(jobSeeker.getFirstname());
        responseDTO.setLastname(jobSeeker.getLastname());
        responseDTO.setEmail(jobSeeker.getEmail());
        responseDTO.setResumeLink(jobSeeker.getResumeLink());
        responseDTO.setDiscipline(jobSeeker.getDiscipline());
        return responseDTO;
	}
	
	// Get JobSeeker Profile for Editing
		@Override
		public JobSeekerProfileEditResponse getJobSeekerForEdit(String email) {
			JobSeeker jobSeeker = userRepo.findByEmail(email);

	        if (jobSeeker != null) {
	            return convertToDTO(jobSeeker);
	        } else {
	            return null;
	        }
		}

	    // Update JobSeeker Profile
		@Override
		public void updateJobSeekerProfile(String email, JobSeekerProfileEditResponse updatedProfile) {
			JobSeeker jobSeeker = userRepo.findByEmail(email);

	        if (jobSeeker != null) {
	            // Update the fields with new values
	            jobSeeker.setFirstname(updatedProfile.getFirstname());
	            jobSeeker.setLastname(updatedProfile.getLastname());
	            jobSeeker.setEmail(updatedProfile.getEmail());
	            jobSeeker.setResumeLink(updatedProfile.getResumeLink());
	            jobSeeker.setDiscipline(updatedProfile.getDiscipline());


	            // Save the updated entity
	            userRepo.save(jobSeeker);
	        }
		}
		
		private JobSeekerProfileEditResponse convertToDTO(JobSeeker jobSeeker) {
	        JobSeekerProfileEditResponse dto = new JobSeekerProfileEditResponse();
	        dto.setFirstname(jobSeeker.getFirstname());
	        dto.setLastname(jobSeeker.getLastname());
	        dto.setEmail(jobSeeker.getEmail());
	        dto.setResumeLink(jobSeeker.getResumeLink());
	        dto.setDiscipline(jobSeeker.getDiscipline());

	        return dto;
	    }

}
