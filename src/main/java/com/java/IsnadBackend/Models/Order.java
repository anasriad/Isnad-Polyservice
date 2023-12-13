package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Table(name="orders")
public class Order {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String order_description;
    private int quantity;
    private double unite_price;
    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;

}
