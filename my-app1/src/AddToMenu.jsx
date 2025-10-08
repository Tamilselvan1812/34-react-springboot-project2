import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function AddToMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);



useEffect(() => {
  if (location.state && location.state.item) {
    const item = location.state.item;
    setName(item.name);
    setValue(item.value);
    setIsEdit(true);
    setId(item.id);                       // save id for PUT
  }
}, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

     const data = { name, value: parseInt(value) };

    if (isEdit) {
    axios.put(`http://localhost:8081/menu/${id}`, data)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  } else {
    axios.post("http://localhost:8081/menu", data)
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  }
};
  

  return (
    <div className="container">
      <h2>{isEdit ? "Edit Item" : "Add Item to Menu"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Item Value:</label>
          <input 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">{isEdit ? "Edit Item" : "Add Item"}</button>
      </form>
    </div>
  );
}

export default AddToMenu;