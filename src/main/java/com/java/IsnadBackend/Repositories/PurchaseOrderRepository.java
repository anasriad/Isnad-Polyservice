package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder,Long> {
}
