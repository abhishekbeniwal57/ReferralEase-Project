package com.example.Project1.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Project1.Entity.Company;
import com.example.Project1.Repo.CompanyRepository;
import com.example.Project1.Service.CompanyService;

@Service
public class CompanyIMPL implements CompanyService{

	@Autowired
    private CompanyRepository companyRepository;
	
	@Override
	public List<Company> getAllCompany() {
		return companyRepository.findAll();
	}

}
