import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HotelMenu() {
  const [menu, setMenu] = useState({});
  const navigate = useNavigate();

  const fetchMenu = () => {
    axios.get("http://localhost:8081/menu")
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleDelete = (name) => {
    axios.delete(`http://localhost:8081/menu/${name}`)
      .then(() => fetchMenu())
      .catch((err) => console.error(err));
  };

  const handleUpdate = (name) => {
    navigate("/add", { state: { name, value: menu[name] } });
  };

  return (
    <div className="container">
      <h2>Hotel Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(menu).map(([name, value]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              <td>
                <button onClick={() => handleUpdate(name)}>Edit</button>
                <button onClick={() => handleDelete(name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/add")}>Add New Item</button>
    </div>
  );
}

export default HotelMenu;