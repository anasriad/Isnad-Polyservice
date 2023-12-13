package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;


import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@Entity
public class Company extends UserEntity {
    private String name;
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Address> addresses =new LinkedList<>();
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Department> departments=new LinkedList<>();

}
