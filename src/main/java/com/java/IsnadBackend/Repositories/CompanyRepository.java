package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company,Long> {
}
