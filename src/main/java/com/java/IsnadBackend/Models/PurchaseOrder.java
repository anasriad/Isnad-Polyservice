package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.sql.Date;
@NoArgsConstructor
@Entity
public class PurchaseOrder {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @OneToOne
    @JoinColumn(name = "service_id")
    private Service service;
    @OneToOne
    @JoinColumn(name= "file_id")
    private File file;
    private Date date;

}
