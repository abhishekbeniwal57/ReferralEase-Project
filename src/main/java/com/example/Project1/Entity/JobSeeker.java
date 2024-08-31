package com.example.Project1.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


@Entity
@Table(name="jobseeker")
public class JobSeeker {

	@Id
	@Column(name="user_id",length=45)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	
	@NotBlank
	@Size(max=255)
	@Column(name="user_firstname", length= 255)
	private String firstname;
	
	@Column(name="user_lastname", length= 255)
	@NotBlank
	private String lastname;
	
	@Column(name="user_email", length= 255)
	@NotBlank
	@Email
	@Size(max=255)
	private String email;
	
	@JsonIgnore
	@Column(name="user_password", length= 255)
	@NotBlank
	@Size(max=255)
	private String password;
	
	@Column(name="resume_link")
	private String resumeLink;
	
	@Column(name="discipline")
	private String discipline;

	public JobSeeker(int userid, String firstname, String lastname, String email, String password,String resumeLink, String discipline) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.resumeLink = resumeLink;
		this.discipline = discipline;

	}
	
	public JobSeeker() {
		
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
	
	public void setResumeLink(String resumeLink)
	{	
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
		return "JobSeeker [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", email="
				+ email + ", password=" + password + ", resumeLink=" + resumeLink + ", discipline=" + discipline + "]";
	}
	
	
}
