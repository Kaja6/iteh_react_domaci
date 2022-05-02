import logo from './logo.svg';
import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Party from './pages/Party';
import Istorija from './pages/Istorija';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pokusaji, setPokusaji] = useState([]);
  const dodajPokusaj = (pokusaj) => {
    setPokusaji(prev => {
      return [...prev, pokusaj]; 
    })
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/istorija' element={<Istorija pokusaji={pokusaji} />} />
        <Route path='/' element={<Party pokusaji={pokusaji.slice(-10).reverse()} dodajPokusaj={dodajPokusaj} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
