import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Payment from './pages/payment/payment';
import NavbarReal from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <NavbarReal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment/:id" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
