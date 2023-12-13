package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;


import java.util.LinkedList;
import java.util.List;
import java.util.Set;
@NoArgsConstructor
@Entity
public class PriceRequest {
 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
 long id;
 @OneToOne
 @JoinColumn(name = "service_id")
 private Service service;
 @OneToMany(mappedBy = "priceRequest",cascade = CascadeType.ALL,orphanRemoval = true)
 private List<PriceOffer> priceOffers=new LinkedList<>();
}
