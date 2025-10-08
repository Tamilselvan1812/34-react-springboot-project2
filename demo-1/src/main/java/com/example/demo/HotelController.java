package com.example.demo;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/menu")  
public class HotelController {
     
	  @Autowired
	    private HotelRepository repository;
	
	  @GetMapping
	    public List<Hotel> getMenu() {
	        return repository.findAll();
	    }
	  
	  @PostMapping
	    public Hotel addItem(@RequestBody Hotel item) {
	        return repository.save(item);
	    }
	  
	  @DeleteMapping("/{id}")
	    public void deleteItem(@PathVariable Long id) {
	        repository.deleteById(id);
	    }
	  
	   @PutMapping("/{id}")
	    public Hotel updateItem(@PathVariable Long id, @RequestBody Hotel item) {
	        Hotel existing = repository.findById(id).orElseThrow();
	        existing.setName(item.getName());
	        existing.setValue(item.getValue());
	        return repository.save(existing);
	    }



}
