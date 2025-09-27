package com.example.demo;

public class Hotel {
	    private String name;
	    private int value;
	    
 public Hotel(String name, int value) {
	        this.name = name;
	        this.value = value;
	        
	    }
 
         public Hotel() {}                           // default constructor required for JSON -> Object mapping

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
