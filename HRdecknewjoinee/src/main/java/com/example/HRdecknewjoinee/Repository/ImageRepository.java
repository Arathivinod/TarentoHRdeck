package com.example.HRdecknewjoinee.Repository;

import com.example.HRdecknewjoinee.Entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}