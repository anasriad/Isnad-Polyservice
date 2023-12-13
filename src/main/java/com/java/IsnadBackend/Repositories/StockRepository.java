package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock,Long> {
}
