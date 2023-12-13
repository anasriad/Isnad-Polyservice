package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity,Long> {
    @Modifying
    @Query("INSERT INTO UserEntity u (u.email, u.password) VALUES (:username, :password)")
    void saveUser(@Param("username") String username, @Param("password") String password);
    Optional<UserEntity> findByEmail(String email);
    Boolean existsByEmail(String Email);
}
