package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
public class Manager extends UserEntity {
    private String firstname;
    private String lastname;
    @OneToOne
    @JoinColumn(name = "department_id")
    private Department department;
    private String phone_number;
}
