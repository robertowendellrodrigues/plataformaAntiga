
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "Componentes/pages/Home";
import Navbar from "Componentes/Navbar";
import Catalog from "Componentes/pages/Catalog";
import Login from "Componentes/pages/Login";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="home" element={<Home />}/>
                <Route path="catalog" element={<Catalog/>}/>
                <Route path="login" element={<Login/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}