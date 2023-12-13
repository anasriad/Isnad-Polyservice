package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {
}
