package com.example.HRdecknewjoinee.controller;

import com.example.HRdecknewjoinee.Entities.Role;
import com.example.HRdecknewjoinee.Services.RoleServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roles")
@CrossOrigin(origins = "*")
public class RoleController {


    @Autowired
    RoleServices roleService;

    @GetMapping("/")

    public List<Role> getRoles() {
        return roleService.readRoles();
    }
}
