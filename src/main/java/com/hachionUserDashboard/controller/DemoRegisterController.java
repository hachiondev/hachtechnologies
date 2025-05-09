package com.hachionUserDashboard.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hachionUserDashboard.entity.DemoRegister;
import com.hachionUserDashboard.repository.DemoRegistrationRepo;


@CrossOrigin
@RestController
public class DemoRegisterController {

    

    @Autowired
    private DemoRegistrationRepo repo;



    @PostMapping("/demoregister/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createDemoRegister(@RequestBody DemoRegister demoregister) {
        repo.save(demoregister);
    }

    // This comes later
    @GetMapping("/demoregister/{id}")
    public ResponseEntity<DemoRegister> getDemoRegister(@PathVariable Integer id) {
        return repo.findById(id)
                   .map(ResponseEntity::ok)
                   .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }


    @GetMapping("/demoregister")
    public List<DemoRegister> getAllDemoRegister() {
        return repo.findAll();
    }
   

    @DeleteMapping("demoregister/delete/{id}") public ResponseEntity<?>
    deleteDemoRegister(@PathVariable int id) { DemoRegister demoregister=
    repo.findById(id).get(); repo.delete(demoregister); return null;
    
    }
}