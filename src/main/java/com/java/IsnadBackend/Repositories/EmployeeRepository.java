package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
