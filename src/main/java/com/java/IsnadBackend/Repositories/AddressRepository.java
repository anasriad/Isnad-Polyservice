package com.java.IsnadBackend.Repositories;


import com.java.IsnadBackend.Models.Address;
import com.java.IsnadBackend.Models.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface AddressRepository extends JpaRepository<Address,Long> {

}
