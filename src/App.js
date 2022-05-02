import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Party from './pages/Party';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/statistika' element={<Statistika pokusaji={pokusaji} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
