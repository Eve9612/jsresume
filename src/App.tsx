import { Routes, Route,} from 'react-router-dom';
import './App.css'
import Home from './Pages/Home /Home'
import Ecom from './Pages/Ecom/Ecom'
import Feature from './Pages/Feature/Feature'
import Resume from './Pages/Resume/Resume'
import Login from './Pages/Login/Login';
import Navbar from './Components/src/components/Navbar';


export default function App() {
  return (
    <div>
      <Navbar/>
      
      <div style={{padding: '15px'}}>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Ecom" element={< Ecom />} />
        <Route path="/Feature" element={< Feature />} />
        <Route path="/Resume" element={< Resume/>} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      </div>
    </div>

  );
}