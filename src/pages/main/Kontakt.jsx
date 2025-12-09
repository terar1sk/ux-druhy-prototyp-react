// src/pages/Kontakt.jsx
import "../../styles/pages/kontakt.css";


function Kontakt(){
    return (
        <section className="contact-page">
            {/* hero */}
            <header className="contact-hero">
                <h1 className="contact-title">Kontakt</h1>
                <p className="contact-subtitle">
                    Máte otázky? <br />
                    Radi vám pomôžeme s rezerváciou alebo návštevou jaskyne.
                </p>
            </header>


            {/* form card */}
            <div className="contact-card">
                <form className="contact-form">
                    <div className="field">
                        <label htmlFor="meno">Meno</label>
                        <input
                            id="meno"
                            type="text"
                            name="meno"
                            placeholder="Zadajte svoje meno"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="priezvisko">Priezvisko</label>
                        <input
                            id="priezvisko"
                            type="text"
                            name="priezvisko"
                            placeholder="Zadajte priezvisko"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="napr. jan.novak@gmail.com"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="sprava">Správa</label>
                        <textarea
                            id="sprava"
                            name="sprava"
                            rows="4"
                            placeholder="Napíšte vašu otázku alebo požiadavku"
                        />
                    </div>

                    <button type="submit" className="contact-btn">
                        Odoslať správu
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Kontakt;
