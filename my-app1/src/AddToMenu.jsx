import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function AddToMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [originalName, setOriginalName] = useState("");

  useEffect(() => {
    if (location.state) {
      setName(location.state.name);
      setValue(location.state.value);
      setOriginalName(location.state.name);
      setIsEdit(true);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      axios.put(`http://localhost:8081/menu/${originalName}`, {
        name: name,
        value: parseInt(value)
      })
      .then(() => {
       
        navigate("/");
      })
      .catch((err) => console.error(err));
    } else {
      axios.post("http://localhost:8081/menu", {
        name: name,
        value: parseInt(value)
      })
      .then(() => {
       
        navigate("/");
      })
      .catch((err) => console.error(err));
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