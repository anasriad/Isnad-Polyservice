package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.sql.Date;
@NoArgsConstructor
@Entity
public class Invoice {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne
    @JoinColumn(name="file_id")
    File file;
    private Date date;
    @ManyToOne
    @JoinColumn(name = "Service_id")
    Service service;
}
