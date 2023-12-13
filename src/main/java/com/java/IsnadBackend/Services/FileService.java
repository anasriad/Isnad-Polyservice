package com.java.IsnadBackend.Services;

import com.java.IsnadBackend.Models.File;
import com.java.IsnadBackend.Repositories.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;


        public ResponseEntity<String> uploadToDB(MultipartFile file , String category) {
            File doc = new File();
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());

            try {
                doc.setName(fileName);
                doc.setType(file.getContentType());
                doc.setData(file.getBytes());
                doc.setCategory(category);
            } catch (IOException e) {
                e.printStackTrace();
            }
          fileRepository.save(doc);

            return ResponseEntity.ok(doc.getName());
        }
    }

