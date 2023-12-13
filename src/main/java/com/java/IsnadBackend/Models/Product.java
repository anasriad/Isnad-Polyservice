package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;


import java.util.LinkedList;
import java.util.List;
import java.util.Set;
@NoArgsConstructor
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String name;
    @ManyToMany(cascade = CascadeType.ALL,mappedBy = "products")
    private List<Component> components=new LinkedList<>();
}
