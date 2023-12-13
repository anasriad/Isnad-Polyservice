package com.java.IsnadBackend.Repositories;

import com.java.IsnadBackend.Models.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface FileRepository extends JpaRepository<File,Long> {
    public default void saveFile(MultipartFile file) {
        try {
            File fileEntity = new File();
            fileEntity.setName(file.getOriginalFilename());
            fileEntity.setData(file.getBytes());

         this.save(fileEntity);
        } catch (Exception e) {
            // Handle the exception
            e.printStackTrace();
        }
    }
    public Optional<File> findByName(String name);
}
