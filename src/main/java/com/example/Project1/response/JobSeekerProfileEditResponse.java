package com.example.Project1.response;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class JobSeekerProfileEditResponse {
	
	@JsonIgnore
	private int userid;
	private String firstname;
	private String lastname;
	private String email;
	@JsonIgnore
	private String password;
    private String resumeLink;
    private String discipline;

	
	public JobSeekerProfileEditResponse(int userid, String firstname, String lastname, String email, String password,String resumeLink,String discipline) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.resumeLink = resumeLink;
		this.discipline = discipline;

	}

	public JobSeekerProfileEditResponse() {
		
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getResumeLink() {
		return resumeLink;
	}

	public void setResumeLink(String resumeLink) {
		this.resumeLink = resumeLink;
	}
	
	public String getDiscipline() {
		return discipline;
	}
	
	public void setDiscipline(String discipline)
	{	
		this.discipline = discipline;
	}

	@Override
	public String toString() {
		return "JobSeekerProfileEditResponse [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", password=" + password + ", resumeLink=" + resumeLink + ", discipline="
				+ discipline + "]";
	}
	
}
