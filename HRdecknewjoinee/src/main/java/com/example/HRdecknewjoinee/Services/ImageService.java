package com.example.HRdecknewjoinee.Services;

import com.example.HRdecknewjoinee.Entities.Image;
import com.example.HRdecknewjoinee.ImageUtils;
import com.example.HRdecknewjoinee.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public String uploadNewJoineeImage(Long id, MultipartFile file) throws IOException {
        imageRepository.save(Image.builder()
                .empImageId(id)
                .empImage(ImageUtils.compressImage(file.getBytes()))
                .build());
        return "File uplaoded successfully";
    }

    public ResponseEntity<?> downloadNewJoineeImage(Long id) {
        Optional<Image> optionalNewJoineeImage = imageRepository.findById(id);
        return optionalNewJoineeImage.map(image -> {
            try {
                byte[] imageData = ImageUtils.decompressImage(image.getEmpImage());
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.IMAGE_JPEG); // Set the appropriate content type
                return ResponseEntity.ok().headers(headers).body(imageData);
            } catch (IOException exception) {
                // Log the exception or throw a custom exception
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }).orElse(ResponseEntity.notFound().build());
    }
}
