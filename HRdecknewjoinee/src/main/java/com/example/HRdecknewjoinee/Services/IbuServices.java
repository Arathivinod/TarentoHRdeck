package com.example.HRdecknewjoinee.Services;

import com.example.HRdecknewjoinee.Entities.Ibu;
import com.example.HRdecknewjoinee.Repository.IbuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IbuServices {
    @Autowired
    IbuRepository ibuRepository;

    public List<Ibu> readAllIbu() {
        return ibuRepository.findAll();
    }
}
