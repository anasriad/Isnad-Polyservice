package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department,Long> {
}
