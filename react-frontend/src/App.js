import './App.css';
import React from "react";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rezervacia from "./pages/Rezervacia";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Rezervacia></Rezervacia>
            {/*<Index></Index>*/}
            {/*<Footer></Footer>*/}
        </div>
    );
}

export default App;
