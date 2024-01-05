package com.example.HRdecknewjoinee.controller;

import com.example.HRdecknewjoinee.Entities.Education;
import com.example.HRdecknewjoinee.Entities.Role;
import com.example.HRdecknewjoinee.Services.EduServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/education")
@CrossOrigin(origins = "*")
public class EduController {
    @Autowired
    EduServices eduService;

    @GetMapping("/")
    public List<Education> getEd() {
        return eduService.readAllEducation();
    }
}
