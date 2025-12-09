// src/pages/Registracia.jsx
import "../../styles/pages/auth.css";
import { Link } from "react-router-dom";


function Registracia(){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register form submitted");
    };

    return(
        <section className="auth-page">
            <header className="auth-hero">
                <h1 className="auth-title">Vytvoriť účet</h1>
                <p className="auth-subtitle">
                    Zaregistrujte sa a spravujte svoje rezervácie na jednom mieste.
                </p>
            </header>

            <div className="auth-card">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                        <label htmlFor="meno">Meno</label>
                        <input
                            id="meno"
                            name="meno"
                            type="text"
                            placeholder="Zadajte svoje meno"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="priezvisko">Priezvisko</label>
                        <input
                            id="priezvisko"
                            name="priezvisko"
                            type="text"
                            placeholder="Zadajte priezvisko"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="napr. jan.novak@gmail.com"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="heslo">Heslo</label>
                        <input
                            id="heslo"
                            name="heslo"
                            type="password"
                            placeholder="Zadajte heslo"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="heslo2">Potvrdenie hesla</label>
                        <input
                            id="heslo2"
                            name="heslo2"
                            type="password"
                            placeholder="Zopakujte heslo"
                        />
                    </div>

                    <label className="auth-checkbox">
                        <input type="checkbox" name="gdpr" />
                        <span>
              Súhlasím so spracovaním osobných údajov na účely správy
              rezervácií.
            </span>
                    </label>

                    <button type="submit" className="auth-btn">
                        Vytvoriť účet
                    </button>
                </form>

                <p className="auth-switch">
                    Už máte účet?{" "}
                    <Link to="/prihlasenie">Prihláste sa</Link>
                </p>
            </div>
        </section>
    );
}

export default Registracia;