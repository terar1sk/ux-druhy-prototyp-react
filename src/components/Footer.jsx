import { Link } from "react-router-dom";
import "../styles/layout/footer.css";
import logo from "../assets/img/logo.png";
import {FaInstagram, FaYoutube, FaXTwitter, FaFacebookF} from "react-icons/fa6";


function Footer(){
    return(
        <footer className="site-footer">
            <div className="footer-wrapper">

                {/* logo + social networks */}
                <div className="footer-brand">
                    <img src={logo} alt="Logo" className="footer-logo" />

                    <div className="footer-socials">
                        <a href="https://www.facebook.com/sprava.slovenskych.jaskyn" className="social-icon"><FaFacebookF /></a>
                        <a href="https://www.youtube.com/watch?v=90HgE_e3kTQ" className="social-icon"><FaYoutube /></a>
                        <a href="#" className="social-icon"><FaXTwitter /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>

                {/* 1 column */}
                <div className="footer-col">
                    <h4>Návštevné informácie</h4>
                    <p>Otváracie hodiny: 9:00 – 17:00</p>
                    <p>Prehliadky každých 30 minút</p>
                    <p>Parkovanie pri vstupe</p>
                </div>

                {/* 2 column */}
                <div className="footer-col">
                    <h4>Kontakt</h4>
                    <p>+421 58 788 1471</p>
                    <p>info@ssj.sk</p>
                </div>

                {/* 3 column */}
                <div className="footer-col">
                    <h4>Odkazy</h4>
                    <p><Link to="/cennik">Cenník</Link></p>
                    <p><a href="https://mapy.dennikn.sk/?trasa=lxmMJ">Mapa</a></p>
                    <p><Link to="/onas">História jaskyne</Link></p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;