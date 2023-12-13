package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
public class Address {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String city;
    private String street;
    private  String postcode;
    private String region;
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

}
