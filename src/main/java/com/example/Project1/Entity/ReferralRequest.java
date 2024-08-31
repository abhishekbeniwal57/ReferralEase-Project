package com.example.Project1.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "referral_requests")
public class ReferralRequest {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "jobseeker_name")
    private String jobseekerName;

    @Column(name = "company_name")
    private String companyname;

    @Column(name = "resume_link")
    private String resumeLink;

    @Column(name = "job_id")
    private String jobId;

    @Column(name = "job_link")
    private String jobLink;

    @Column(name = "qualification")
    private String qualification;

    @Column(name = "additional_info")
    private String additionalInfo; // Optional field

    @ManyToOne
    @JoinColumn(name = "job_seeker_id", referencedColumnName = "user_id", nullable = false)
    private JobSeeker jobSeeker;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "user_id", nullable = false)
    private Employee employee;

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJobseekerName() {
        return jobseekerName;
    }

    public void setJobseekerName(String jobseekerName) {
        this.jobseekerName = jobseekerName;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyName) {
        this.companyname = companyName;
    }

    public String getResumeLink() {
        return resumeLink;
    }

    public void setResumeLink(String resumeLink) {
        this.resumeLink = resumeLink;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getJobLink() {
        return jobLink;
    }

    public void setJobLink(String jobLink) {
        this.jobLink = jobLink;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public JobSeeker getJobSeeker() {
        return jobSeeker;
    }

    public void setJobSeeker(JobSeeker jobSeeker) {
        this.jobSeeker = jobSeeker;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

	@Override
	public String toString() {
		return "ReferralRequest [id=" + id + ", jobseekerName=" + jobseekerName + ", companyname=" + companyname
				+ ", resumeLink=" + resumeLink + ", jobId=" + jobId + ", jobLink=" + jobLink + ", qualification="
				+ qualification + ", additionalInfo=" + additionalInfo + ", jobSeeker=" + jobSeeker + ", employee="
				+ employee + "]";
	}

}
