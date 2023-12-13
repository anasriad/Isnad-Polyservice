package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "customers")
@NoArgsConstructor
public class Customer extends UserEntity {
    private String firstname;
    private String lastname;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    private String phone_number;
    @ManyToOne
    @JoinColumn(name="company_id")
    private Company company;
}

