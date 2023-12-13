package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@Entity
public class Component {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String name;
    @ManyToOne
    @JoinTable(name = "component_product",
            joinColumns = @JoinColumn(name = "component_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private Product products;
}