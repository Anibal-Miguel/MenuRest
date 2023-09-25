import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Carrousel from './components/Carrousel.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import Bebidas from './components/Bebidas.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Carrousel />
      <Cards />
       <Bebidas /> 
      <Footer />
      <Routes>

        <Route></Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App