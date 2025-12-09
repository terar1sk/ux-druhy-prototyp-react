// src/pages/Platba.jsx
import "../../styles/pages/platba.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


function Platba(){
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    const [paymentMethod, setPaymentMethod] = useState("card");


    if(!data){
        return(
            <section className="pay-page">
                <div className="pay-card">
                    <p>Údaje o rezervácii chýbajú.</p>
                    <button
                        className="pay-back"
                        onClick={() => navigate("/rezervacia")}
                    >
                        Späť na rezerváciu
                    </button>
                </div>
            </section>
        );
    }

    const { date, time, counts, tariffs, totalPrice } = data;

    const formatDate = (iso) =>
        new Date(iso).toLocaleDateString("sk-SK", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

    const items = tariffs
        .map((t) => ({
            ...t,
            count: counts[t.id] || 0,
        }))
        .filter((i) => i.count > 0);

    const paymentMethods = [
        {
            id: "card",
            label: "Platobná karta",
            description: "Visa, Mastercard, Maestro",
        },
        {
            id: "onspot",
            label: "Platba na mieste",
            description: "Platíte priamo na pokladni v hotovosti alebo kartou.",
        },
        {
            id: "bank",
            label: "Bankový prevod",
            description: "Údaje k platbe vám pošleme na e-mail.",
        },
    ];

    const handlePay = (e) => {
        e.preventDefault();
        alert(
            `Platba (${paymentMethod}) bola úspešne spracovaná (fiktívne).`
        );
        navigate("/");
    };

    return(
        <section className="pay-page">
            <div className="pay-header">
                <h1 className="pay-title">Platba za vstup</h1>
                <p className="pay-subtitle">
                    Skontrolujte si údaje a vyberte spôsob platby.
                </p>
            </div>

            <div className="pay-layout">
                {/* reservation summary (left) */}
                <div className="pay-card">
                    <h2 className="pay-block-title">Súhrn rezervácie</h2>

                    <div className="pay-row">
                        <span>Dátum</span>
                        <span>{formatDate(date)}</span>
                    </div>
                    <div className="pay-row">
                        <span>Čas prehliadky</span>
                        <span>{time}</span>
                    </div>

                    <div className="pay-tickets">
                        {items.map((item) => (
                            <div className="pay-row" key={item.id}>
                <span>
                  {item.name} × {item.count}
                </span>
                                <span>{item.count * item.price} €</span>
                            </div>
                        ))}
                    </div>

                    <div className="pay-total">
                        <span>Spolu na úhradu</span>
                        <span className="pay-total-amount">
              {totalPrice} €
            </span>
                    </div>
                </div>

                {/* right block — payment “window” */}
                <form className="pay-card pay-form" onSubmit={handlePay}>
                    <h2 className="pay-block-title">Spôsob platby</h2>


                    {/* select payment method – cards */}
                    <div className="pay-methods">
                        {paymentMethods.map((m) => (
                            <label
                                key={m.id}
                                className={
                                    "pay-method" +
                                    (paymentMethod === m.id ? " pay-method--active" : "")
                                }
                            >
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value={m.id}
                                    checked={paymentMethod === m.id}
                                    onChange={() => setPaymentMethod(m.id)}
                                />
                                <div className="pay-method-body">
                                    <span className="pay-method-label">{m.label}</span>
                                    <span className="pay-method-desc">{m.description}</span>
                                </div>
                            </label>
                        ))}
                    </div>


                    {/* dynamic “window” with fields for the selected method */}
                    <div className="pay-method-details">
                        {paymentMethod === "card" && (
                            <>
                                <h3>Údaje o karte</h3>
                                <label>
                                    <span>Číslo karty</span>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        placeholder="1234 5678 9012 3456"
                                        required
                                    />
                                </label>
                                <div className="pay-row-inline">
                                    <label>
                                        <span>Platnosť</span>
                                        <input
                                            type="text"
                                            placeholder="MM/RR"
                                            required
                                        />
                                    </label>
                                    <label>
                                        <span>CVC</span>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            required
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        {paymentMethod === "onspot" && (
                            <>
                                <h3>Platba na mieste</h3>
                                <p className="pay-note">
                                    Rezerváciu uhradíte priamo na pokladni
                                    v deň návštevy. Prosím, príďte aspoň 15 minút
                                    pred začiatkom prehliadky.
                                </p>
                            </>
                        )}

                        {paymentMethod === "bank" && (
                            <>
                                <h3>Bankový prevod</h3>
                                <p className="pay-note">
                                    Po potvrdení rezervácie vám na e-mail pošleme údaje
                                    k bankovému prevodu (IBAN, variabilný symbol a suma).
                                </p>
                            </>
                        )}
                    </div>


                    {/* general payer information */}
                    <div className="pay-user-block">
                        <h3>Kontaktné údaje</h3>

                        <label>
                            <span>Meno a priezvisko</span>
                            <input type="text" required />
                        </label>

                        <label>
                            <span>E-mail</span>
                            <input type="email" required />
                        </label>

                        <label>
                            <span>Telefón</span>
                            <input type="tel" required />
                        </label>
                    </div>

                    <button type="submit" className="pay-submit">
                        Dokončiť platbu
                    </button>

                    <button
                        type="button"
                        className="pay-back-link"
                        onClick={() => navigate(-1)}
                    >
                        ← Upraviť rezerváciu
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Platba;
