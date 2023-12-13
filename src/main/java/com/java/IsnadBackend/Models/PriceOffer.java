package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.sql.Date;
@NoArgsConstructor
@Entity
public class PriceOffer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @ManyToOne
    @JoinTable(name="priceRequest_Id")
    private PriceRequest priceRequest;
    @OneToOne
    @JoinColumn(name="priceRequest_Id")
    private File file;
    private Date date;
}
