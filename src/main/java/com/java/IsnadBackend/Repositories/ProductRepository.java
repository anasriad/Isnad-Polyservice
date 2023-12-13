package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
