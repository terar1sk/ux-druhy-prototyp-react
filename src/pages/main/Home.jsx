// src/pages/Home.jsx
import "../../styles/pages/home.css";
import caveImg from "../../assets/img/cave.jpg";
import { Link } from "react-router-dom";


function Home(){
    return (
        <div className="home">

            {/* hero */}
            <section className="hero">
                <h1 className="hero-title">Dobšinská ľadová jaskyňa</h1>
                <p className="hero-subtitle">
                    Objavte krásu podzemného ľadu – rezervujte si vstup online
                </p>

                <div className="hero-buttons">
                    <Link to="/rezervacia" className="hero-btn">
                        Rezervovať vstup
                    </Link>

                    <Link to="/onas" className="hero-btn">
                        Zistiť viac
                    </Link>
                </div>
            </section>


            {/* image */}
            <img src={caveImg} alt="Dobšinská ľadová jaskyňa" className="hero-image" />


            {/* benefits */}
            <section className="benefits">
                <h1 className="benefits-title">Prečo si rezervovať vstup online?</h1>
                <p className="benefits-subtitle">
                    Pohodlie, úspora času a bez zbytočného čakania.
                </p>

                <div className="benefits-grid">
                    <div className="benefit-card">
                        <h3>Bez čakania</h3>
                        <p className="benefit-meta">Rezervácia online</p>
                        <p className="benefit-note">Vyberte dátum a čas vopred.</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Jednoduché použitie</h3>
                        <p className="benefit-meta">Moderný systém</p>
                        <p className="benefit-note">Rezervácia trvá menej než 2 minúty.</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Bezpečná platba</h3>
                        <p className="benefit-meta">SSL platby</p>
                        <p className="benefit-note">Platby sú šifrované a bezpečné.</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Pre celú rodinu</h3>
                        <p className="benefit-meta">Skupinové lístky</p>
                        <p className="benefit-note">Rezervujte pre viac osôb naraz.</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Ekologické riešenie</h3>
                        <p className="benefit-meta">Digitálne lístky</p>
                        <p className="benefit-note">Všetko v mobile.</p>
                    </div>

                    <div className="benefit-card">
                        <h3>Dostupné všade</h3>
                        <p className="benefit-meta">Mobilný web</p>
                        <p className="benefit-note">Rezervácia funguje aj z telefónu.</p>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home;
