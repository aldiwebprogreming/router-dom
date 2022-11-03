import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Profil from './pages/Profil';
import About from './pages/About';
import Notfount from './pages/Notfount';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/profil' element={<Profil />}>
            <Route path=':username' element ={<Profil />} />
          </Route>
          <Route path='about' element={<About />}></Route>
          <Route path='*' element={<Notfount />}></Route>
        </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
