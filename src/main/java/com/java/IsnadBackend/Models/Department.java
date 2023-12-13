package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;


import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@Entity
public class Department extends UserEntity {
    private String name;
    @ManyToOne
    @JoinColumn(name = "Company_id")
    private Company company;
    @OneToMany(mappedBy = "department", cascade= CascadeType.ALL,orphanRemoval = true)
    private List<Customer> customers=new LinkedList<>();
    @OneToMany(mappedBy = "department", cascade= CascadeType.ALL,orphanRemoval = true)
    private List<Employee> employees=new LinkedList<>();
    @OneToOne(mappedBy = "department", cascade= CascadeType.ALL,orphanRemoval = true)
    private Manager manager;

    
}
