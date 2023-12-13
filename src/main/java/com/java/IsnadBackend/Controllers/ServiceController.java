package com.java.IsnadBackend.Controllers;

import com.java.IsnadBackend.Models.File;
import com.java.IsnadBackend.Models.Service;
import com.java.IsnadBackend.Repositories.FileRepository;
import com.java.IsnadBackend.Repositories.ServiceRepository;
import com.java.IsnadBackend.Services.FileService;
import com.java.IsnadBackend.Services.ServiceForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/services")
public class ServiceController {
    @Autowired
    ServiceRepository serviceRepository;
    @Autowired
    FileRepository fileRepository;

    @Autowired
    FileService fileService;
    @PostMapping("/postOrder")
    public ResponseEntity createService(@RequestParam("file") MultipartFile file) throws Exception{
        ResponseEntity response= fileService.uploadToDB(file,"Cahier des charges");
       return response;
    }
    @GetMapping("/getOrders")
    public List<Service> getServices(){
        return  serviceRepository.findAll();
    }

   @GetMapping("/getOrders/{id}")
   public List<Service> getServicesByUserID(@PathVariable long id){
        List<Service> services= serviceRepository.findByUserId(id).orElseThrow(()->new RuntimeException("id not found"));
        return  services;
   }

}
