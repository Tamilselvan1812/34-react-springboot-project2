package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HotelController {
     
	private Map<String, Integer> menu = new HashMap<>();
	
	 public HotelController() {
	        menu.put("idly", 50);
	        menu.put("dosa", 100);
	    }
	
	  @GetMapping("/menu")
	    public Map<String, Integer> getMenu() {
	        return menu;
	    }
	  
	  @PostMapping("/menu")
	    public String addItem(@RequestBody Hotel hotel) {
	        menu.put(hotel.getName(), hotel.getValue());
	        return "Item added: " + hotel.getName() + " = " + hotel.getValue();
	    }
	  
	  @DeleteMapping("/menu/{name}")
	    public String deleteItem(@PathVariable String name) {
	        if(menu.containsKey(name)) {
	            menu.remove(name);
	            return "Item deleted: " + name;
	        } else {
	            return "Item not found: " + name;
	        }
	        }
	  
	  @PutMapping("/menu/{oldName}")
	  public String updateItem(@PathVariable String oldName, @RequestBody Hotel hotel) {
	      
	      if (!oldName.equals(hotel.getName())) {                                            // Remove old key if name changed
	          menu.remove(oldName);
	      }
	     
	      menu.put(hotel.getName(), hotel.getValue());                                           // Add new key with value
	      return "Item updated: " + hotel.getName() + " = " + hotel.getValue();
	  }



}
