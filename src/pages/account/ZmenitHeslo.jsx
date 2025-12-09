import "../../styles/pages/auth.css";
import { useNavigate } from "react-router-dom";


function ZmenitHeslo(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/ucet");
    };

    return(
        <section className="auth-page">
            <header className="auth-hero">
                <h1 className="auth-title">Zmeniť heslo</h1>
                <p className="auth-subtitle">
                    Nastavte si nové heslo pre svoj účet.
                </p>
            </header>

            <div className="auth-card">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                        <label htmlFor="oldPass">Aktuálne heslo</label>
                        <input
                            id="oldPass"
                            name="oldPass"
                            type="password"
                            placeholder="Zadajte aktuálne heslo"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="newPass">Nové heslo</label>
                        <input
                            id="newPass"
                            name="newPass"
                            type="password"
                            placeholder="Zadajte nové heslo"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="newPass2">Potvrdenie nového hesla</label>
                        <input
                            id="newPass2"
                            name="newPass2"
                            type="password"
                            placeholder="Zopakujte nové heslo"
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Zmeniť heslo
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ZmenitHeslo;