// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/main/Home";
import Onas from "./pages/main/Onas";
import Cennik from "./pages/main/Cennik";
import Rezervacia from "./pages/main/Rezervacia";
import Platba from "./pages/main/Platba";
import Kontakt from "./pages/main/Kontakt";

import Prihlasenie from "./pages/auth/Prihlasenie";
import Registracia from "./pages/auth/Registracia";

import Ucet from "./pages/account/Ucet";
import UpravitProfil from "./pages/account/UpravitProfil";
import ZmenitHeslo from "./pages/account/ZmenitHeslo";

import NotFound from "./pages/system/NotFound";

function App(){
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
    };


    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkTheme ? "dark" : "light"
        );
    }, [darkTheme]);


    return (
        <AuthProvider>
            <div className={darkTheme ? "app app--dark" : "app"}>
                <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/onas" element={<Onas />} />
                    <Route path="/cennik" element={<Cennik />} />
                    <Route path="/rezervacia" element={<Rezervacia />} />
                    <Route path="/platba" element={<Platba />} />
                    <Route path="/kontakt" element={<Kontakt />} />

                    <Route path="/prihlasenie" element={<Prihlasenie />} />
                    <Route path="/registracia" element={<Registracia />} />

                    <Route path="/ucet" element={<Ucet />} />
                    <Route path="/upravit-profil" element={<UpravitProfil />} />
                    <Route path="/zmenit-heslo" element={<ZmenitHeslo />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
