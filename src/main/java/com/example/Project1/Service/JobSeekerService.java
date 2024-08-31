package com.example.Project1.Service;

import com.example.Project1.Dto.JobSeekerLoginDTO;
import com.example.Project1.Dto.JobSeekerRegisterDTO;
import com.example.Project1.response.JobSeekerProfileEditResponse;
import com.example.Project1.response.JobSeekerProfileResponse;
import com.example.Project1.response.JobseekerLoginResponse;


public interface JobSeekerService {

	String addUser(JobSeekerRegisterDTO userDTO);

	JobseekerLoginResponse loginUser(JobSeekerLoginDTO loginDTO);

    JobSeekerProfileResponse getLoggedInJobSeeker(String email);

    JobSeekerProfileEditResponse getJobSeekerForEdit(String email);

    void updateJobSeekerProfile(String email, JobSeekerProfileEditResponse updatedProfile);

}
