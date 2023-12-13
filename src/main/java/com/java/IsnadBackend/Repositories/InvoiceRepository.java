package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice,Long> {
}
