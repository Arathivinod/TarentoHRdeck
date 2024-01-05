package com.example.HRdecknewjoinee.controller;
import com.example.HRdecknewjoinee.Entities.Newjoins;
import com.example.HRdecknewjoinee.Services.NewjoinsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController

@RequestMapping("/newjoinee")
@CrossOrigin(origins = "*")
public class NewjoinController {

        @Autowired
        NewjoinsService newJoineeService;

        @GetMapping("/")
        public List<Newjoins> getAllNewJoinee() {

            return newJoineeService.readAllNewJoinee();
        }
        @GetMapping("/{id}")
        public Optional<Newjoins> getOneNewJoinee(@PathVariable int id) {
        return newJoineeService.readOneNewJoinee(id);
    }
        @PostMapping("/post")
        public void postNewJoinee(@RequestBody Newjoins newJoinee) {

            newJoineeService.writeNewJoinee(newJoinee);
        }

    }

