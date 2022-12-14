import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Payment from './pages/payment/payment';
import NavbarReal from './components/navbar/navbar';
import Footer from './components/footer/footer';
import CheckOutForm from './pages/checkout/checkout';
import CheckoutSucces from './pages/checkout/checkout-succes';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="wrapper">
          <NavbarReal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/checkout" element={<CheckOutForm />} />
            <Route path="/checkout-succes" element={<CheckoutSucces />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
