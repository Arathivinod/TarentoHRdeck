package com.example.HRdecknewjoinee.Services;

import com.example.HRdecknewjoinee.Entities.Education;
import com.example.HRdecknewjoinee.Repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EduServices {
    @Autowired
    private EducationRepository educationRepository;

    public List<Education> readAllEducation() {
        return educationRepository.findAll();
    }
}
