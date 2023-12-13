package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
