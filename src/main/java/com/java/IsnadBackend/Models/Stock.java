package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.util.Set;
@NoArgsConstructor
@Entity
public class Stock {
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    long quantity;
    private String unit;
}
