package com.example.HRdecknewjoinee.Services;

import com.example.HRdecknewjoinee.Entities.Role;
import com.example.HRdecknewjoinee.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServices {
    @Autowired
    RoleRepository roleRepository;

    public List<Role> readRoles() {
        return roleRepository.findAll();
    }

}
