package com.java.IsnadBackend.Controllers;

import com.java.IsnadBackend.Repositories.SalesOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sales")
public class SalesController {
    @Autowired
    private SalesOrderRepository salesOrderRepository;
    @GetMapping("/countSales")
    public int getCount(){
     return salesOrderRepository.getSalesCount();
    }
    @GetMapping("/averagePrice")
    public double getAverage(){
        return salesOrderRepository.getAverage();
    }


}
