package com.example.HRdecknewjoinee.controller;

import com.example.HRdecknewjoinee.Entities.Ibu;
import com.example.HRdecknewjoinee.Services.IbuServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/ibus")
@CrossOrigin(origins = "*")
public class IbuController {

        @Autowired
        IbuServices ibuService;

        @GetMapping("/")
        public List<Ibu> getIbus() {
            return ibuService.readAllIbu();
        }
    }

