package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Hotel {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	  
	    private String name;
	    private int value;
	    
	    public Hotel() {}
	    
   public Hotel(String name, int value) {
	        this.name = name;
	        this.value = value;
	        
	    }
   
      public Long getId() 
      {
	   return id;
	   }
      public void setId(Long id)
       {
	   this.id = id;
	   }
 
       public String getName() 
        {
			return name;
		}

       public void setName(String name)
       {
			this.name = name;
		}

       public int getValue() 
       {
			return value;
		}
       public void setValue(int value)
       {
			this.value = value;
		}
}
