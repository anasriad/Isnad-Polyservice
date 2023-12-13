package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.sql.Date;
@NoArgsConstructor
@Entity
public class Employee {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String firstname;
    private String lastname;
    private String gender;
    private Date joiningDate;
    private double salary;
    private String phone_number;
    @ManyToOne
    @JoinColumn(name="department_id")
    private Department department;

}
