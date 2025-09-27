import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddToMenu() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8081/menu", {
      name: name,
      value: parseInt(value)
    })
    .then(() => {
      alert("Item added successfully!");
      navigate("/");                                                      // redirect back to HotelMenu
    })
    .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Add Item to Menu</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name: </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Item Value: </label>
          <input 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddToMenu;
