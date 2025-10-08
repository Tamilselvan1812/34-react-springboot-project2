import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HotelMenu() {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  const fetchMenu = () => {
    axios.get("http://localhost:8081/menu")
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/menu/${id}`)
      .then(() => fetchMenu())
      .catch((err) => console.error(err));
  };

  const handleUpdate = (item) => {
   navigate("/add", { state: { item } });
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
          {menu.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>
                <button onClick={() => handleUpdate(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
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