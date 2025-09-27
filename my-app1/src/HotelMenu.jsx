import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HotelMenu() {
  const [menu, setMenu] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8081/menu")                              // match backend GET endpoint
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Hotel Menu</h2>
      <ul>
        {Object.entries(menu).map(([name, value]) => (
          <li key={name}>{name} = {value}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/add")}>Add New Item</button>
    </div>
  );
}

export default HotelMenu;
