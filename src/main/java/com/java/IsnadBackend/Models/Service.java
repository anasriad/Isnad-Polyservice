package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@Setter
@Entity
public class Service {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @OneToMany (mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders=new LinkedList<>();
    private String document;
    @OneToOne
    @JoinColumn(name = "file_id")
    private File file;
    @OneToMany (mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PriceRequest> priceRequests=new LinkedList<>();
    @OneToOne (mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private PurchaseOrder purchaseOrder;
    @OneToOne (mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private SalesOrder salesOrder;
    @ManyToOne
    @JoinColumn(name="user_id")
    private UserEntity user;
    @OneToOne (mappedBy = "service", cascade = CascadeType.ALL, orphanRemoval = true)
    private Invoice invoice;
    private String category;

}
