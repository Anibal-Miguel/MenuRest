import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
// import Carrousel from './components/Carrousel.jsx';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Registro from './pages/Registro.jsx';
import Administration from './pages/Administration.jsx';
import Customer from './components/Customer.jsx';
import Delfood from './components/Delfood.jsx';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      {/* <Carrousel /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Administration' element={<Administration />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Registro' element={<Registro/>}/>
        <Route path='/Cards' element={<Cards />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/Customer' element={<Customer/>}/>
        <Route path='/Delfood' element={<Delfood/>}/>

      </Routes>
      <Footer />
    </Router> 
  )
}

export default App