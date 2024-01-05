package com.example.HRdecknewjoinee.Services;

import com.example.HRdecknewjoinee.Entities.Newjoins;
import com.example.HRdecknewjoinee.Repository.NewjoinsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewjoinsService {

    @Autowired
    NewjoinsRepository newjoinsRepository;

    public List<Newjoins> readAllNewJoinee() {

        return newjoinsRepository.findAll();
    }

    public Optional<Newjoins> readOneNewJoinee(int id) {
        return newjoinsRepository.findById(id);
    }

    public void writeNewJoinee(Newjoins newJoinee) {

        newjoinsRepository.save(newJoinee);
    }
}
