import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/layout/header.css";
import logo from "../assets/img/logo.png";
import ThemeToggle from "../components/ui/ThemeToggle";

const linkCls = ({ isActive }) =>
    "nav-link" + (isActive ? " active" : "");


function Header({ darkTheme, toggleTheme }){
    const [open, setOpen] = useState(false);

    return(
        <header className="site-header">
            <div className="nav-container">

                {/* left side: logo + nav */}
                <div className="header-left">
                    <div className="logo-wrap">
                        <img src={logo} className="logo" alt="Logo" />
                    </div>

                    <nav className={open ? "nav-main nav-main--open" : "nav-main"}>
                        <ul className="nav-list">
                            <li><NavLink to="/" end className={linkCls}>Domov</NavLink></li>
                            <li><NavLink to="/onas" className={linkCls}>O nás</NavLink></li>
                            <li><NavLink to="/rezervacia" className={linkCls}>Rezervácia</NavLink></li>
                            <li><NavLink to="/cennik" className={linkCls}>Cenník</NavLink></li>
                            <li><NavLink to="/kontakt" className={linkCls}>Kontakt</NavLink></li>
                        </ul>
                    </nav>
                </div>

                {/* right side: auth + theme */}
                <div className="header-right">
                    <div className="auth-buttons">
                        <Link to="/prihlasenie" className="header-btn">
                            <span className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Prihlásiť sa</span>
                        </Link>

                        <Link to="/registracia" className="header-btn">
                            <span className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Registrovať sa</span>
                        </Link>
                    </div>

                    <ThemeToggle darkTheme={darkTheme} toggleTheme={toggleTheme} />
                </div>


                {/* mobile burger */}
                <button
                    className="nav-toggle"
                    onClick={() => setOpen(!open)}
                    aria-label="toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}

export default Header;