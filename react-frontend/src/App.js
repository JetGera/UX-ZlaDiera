import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import RezervaciaPage from "./pages/Rezervacia";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/Payment-success";
import PaymentError from "./pages/Payment-error";
import ProfilPage from "./pages/ProfilPage"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Onas from "./pages/O-nas";
import PriceList from "./pages/PriceList";
import Fotogalery from "./pages/Fotogalery";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/rezervacia" element={<RezervaciaPage />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                    <Route path="/payment-error" element={<PaymentError />} />
                    <Route path="/profil" element={<ProfilPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/o-nas" element={<Onas />} />
                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/fotogalery" element={<Fotogalery />} />
                </Routes>
                <ConditionalFooter />
            </div>
        </Router>
    );
}

function ConditionalFooter() {
    const location = useLocation();

    // Show Footer only on the Index page
    return location.pathname === "/" ? <Footer /> : null;
}

export default App;
