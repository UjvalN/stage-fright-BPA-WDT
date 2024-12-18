import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';
import Merch from './pages/Merch';
import Contact from './pages/Contact';
import ItemDetails from './pages/ItemDetails';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/merch/:id" element={<ItemDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;