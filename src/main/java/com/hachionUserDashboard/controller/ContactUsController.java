package com.hachionUserDashboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hachionUserDashboard.entity.Contact;
import com.hachionUserDashboard.entity.DemoRegister;
import com.hachionUserDashboard.repository.ContactUsRepository;
import com.hachionUserDashboard.repository.DemoRegistrationRepo;

@CrossOrigin
@RestController
public class ContactUsController {

    

    @Autowired
    private ContactUsRepository repo;



    @PostMapping("/contactus/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createContact(@RequestBody Contact contact) {
        repo.save(contact);
    }

    // This comes later
    @GetMapping("/contactus/{id}")
    public ResponseEntity<Contact> getContact(@PathVariable Integer id) {
        return repo.findById(id)
                   .map(ResponseEntity::ok)
                   .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }


    @GetMapping("/contactus")
    public List<Contact> getAllContact() {
        return repo.findAll();
    }
   

    @DeleteMapping("/contactus/delete/{id}") public ResponseEntity<?>
    deleteContact(@PathVariable int id) { Contact contact=
    repo.findById(id).get(); repo.delete(contact); return null;
    
    }
}