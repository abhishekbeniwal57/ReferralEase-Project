package com.example.Project1.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "company")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 255)
    @Column(name = "companyname", length = 255)
    private String companyname;

    @NotBlank
    @Column(name = "company_career", length = 255)
    private String companycareer;

    public Company(String companyname, String companycareer) {
        this.companyname = companyname;
        this.companycareer = companycareer;
    }

    public Company() {

    }

    public Long getId() {
        return id;
    }

    public String getCompanyname() {
        return companyname;
    }

    public void setCompanyname(String companyname) {
        this.companyname = companyname;
    }

    public String getCompanycareer() {
        return companycareer;
    }

    public void setCompanycareer(String companycareer) {
        this.companycareer = companycareer;
    }

    @Override
    public String toString() {
        return "Company [id=" + id + ", companyname=" + companyname + ", companycareer=" + companycareer + "]";
    }
}
