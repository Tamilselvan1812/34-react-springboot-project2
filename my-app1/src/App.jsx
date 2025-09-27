import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  HotelMenu from './HotelMenu';
import AddToMenu from './AddToMenu';

function App() {
 return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HotelMenu/>} />
          <Route path = "/add" element = {<AddToMenu/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
