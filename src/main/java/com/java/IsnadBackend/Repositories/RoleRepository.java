package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Roles,Integer> {

    Optional<Roles> findByName(String Name);
}
