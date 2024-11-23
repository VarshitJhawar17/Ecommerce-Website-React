import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Pages/Homepage';
import ProductCard from './components/ProductCard/ProductCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order'

function App() {
  return (
    <>
    
    <Router>
    <NavBar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/OrderCart" element={<Order/>} />
      </Routes>
     
    </Router>
     <Footer />
     </>
  );
}

export default App;
