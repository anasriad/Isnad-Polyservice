package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ServiceRepository extends JpaRepository<Service,Long> {
    @Query("SELECT s FROM Service s WHERE s.user = ?1")
    Optional<List<Service>> findByUserId(Long userId);

}
