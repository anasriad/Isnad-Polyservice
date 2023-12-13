package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.SalesOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SalesOrderRepository extends JpaRepository<SalesOrder,Long> {
    @Query("SELECT COUNT(*) FROM SalesOrder")
    public  int getSalesCount();
    @Query("SELECT AVG(price) FROM SalesOrder")
    double getAverage();
}
