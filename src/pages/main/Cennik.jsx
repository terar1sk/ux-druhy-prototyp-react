// src/pages/Cennik.jsx
import "../../styles/pages/cennik.css";
import { Link } from "react-router-dom";


function Cennik(){
    return (
        <section className="pricing-page">
            {/* hero */}
            <header className="pricing-hero">
                <h1 className="pricing-title">Cenník vstupov</h1>
                <p className="pricing-subtitle">
                    Vyberte typ vstupenky, ktorý vám vyhovuje.
                </p>
            </header>

            {/* cennik */}
            <div className="pricing-grid">
                {/* dieta / student */}
                <article className="pricing-card">
                    <h2 className="pricing-name">Dieťa / študent</h2>
                    <p className="pricing-price">
                        <span className="euro">€</span>5
                    </p>
                    <ul className="pricing-list">
                        <li>Do 15 rokov alebo ISIC</li>
                        <li>Rovnaká dĺžka prehliadky</li>
                    </ul>
                    <Link to="/rezervacia" className="pricing-btn">
                        Rezervovať
                    </Link>
                </article>

                {/* adult */}
                <article className="pricing-card pricing-card--featured">
                    <h2 className="pricing-name">Dospelý vstup</h2>
                    <p className="pricing-price">
                        <span className="euro">€</span>9
                    </p>
                    <ul className="pricing-list">
                        <li>Pre dospelých návštevníkov</li>
                        <li>Prehliadka 45 minút</li>
                        <li>Online rezervácia lístom</li>
                    </ul>

                    <Link to="/rezervacia" className="pricing-btn pricing-btn--light">
                        Rezervovať
                    </Link>
                </article>

                {/* family */}
                <article className="pricing-card">
                    <h2 className="pricing-name">Rodinný vstup</h2>
                    <p className="pricing-price">
                        <span className="euro">€</span>22
                    </p>
                    <ul className="pricing-list">
                        <li>2 dospelí + 2 deti</li>
                        <li>Zvýhodnená cena</li>
                    </ul>

                    <Link to="/rezervacia" className="pricing-btn">
                        Rezervovať
                    </Link>
                </article>
            </div>

            {/* FAQ */}
            <section className="pricing-faq">
                <h2 className="faq-title">Často kladené otázky</h2>
                <p className="faq-subtitle">
                    Informácie o vstupoch, prehliadkach a platbách.
                </p>

                <div className="faq-list">
                    <details className="faq-item" open>
                        <summary>Ako dlho trvá prehliadka?</summary>
                        <p>
                            Prehliadka trvá približne 45 minút. Návštevníci prechádzajú
                            sprístupnenú časť jaskyne so sprievodcom, ktorý vysvetľuje
                            históriu, vznik ľadu a zaujímavosti o podzemných priestoroch.
                            Trasa je nenáročná a vhodná aj pre deti.
                        </p>
                    </details>

                    <details className="faq-item">
                        <summary>Môžem si lístok rezervovať online?</summary>
                        <p>
                            Áno, lístok si môžete rezervovať online cez tento rezervačný
                            systém. Po úhrade vám príde potvrdenie na e-mail.
                        </p>
                    </details>

                    <details className="faq-item">
                        <summary>Sú zľavy pre študentov?</summary>
                        <p>
                            Študenti s platným preukazom ISIC majú zvýhodnenú cenu podľa
                            tarify „Dieťa / študent“.
                        </p>
                    </details>

                    <details className="faq-item">
                        <summary>Môžem zaplatiť kartou?</summary>
                        <p>
                            Áno, pri online rezervácii môžete zaplatiť kartou. Na mieste je
                            možná platba kartou alebo v hotovosti (podľa aktuálnych možností
                            pokladne).
                        </p>
                    </details>
                </div>
            </section>
        </section>
    );
}

export default Cennik;