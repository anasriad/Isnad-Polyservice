package com.java.IsnadBackend.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "files")
public class File {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    private String name;
    private String type;
    @Lob
    private byte[] data;
    private String category;
    @OneToOne(mappedBy = "file",cascade = CascadeType.ALL,orphanRemoval = true)
    private Service service;
    @OneToOne(mappedBy = "file",cascade = CascadeType.ALL,orphanRemoval = true)
    private SalesOrder salesOrder;
    @OneToOne(mappedBy = "file",cascade = CascadeType.ALL,orphanRemoval = true)
    private PriceOffer priceOffer;
    @OneToOne(mappedBy = "file",cascade = CascadeType.ALL,orphanRemoval = true)
    private PurchaseOrder purchaseOrder;
    @OneToOne(mappedBy = "file",cascade = CascadeType.ALL,orphanRemoval = true)
    private Invoice invoice;

}
