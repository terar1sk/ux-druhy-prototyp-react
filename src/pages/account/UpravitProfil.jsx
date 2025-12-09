import "../../styles/pages/auth.css";
import { useNavigate } from "react-router-dom";


function UpravitProfil(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/ucet");
    };

    return(
        <section className="auth-page">
            <header className="auth-hero">
                <h1 className="auth-title">Upraviť profil</h1>
                <p className="auth-subtitle">
                    Zmeňte svoje základné údaje pre správu rezervácií.
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
                        <label htmlFor="telefon">Telefón (voliteľné)</label>
                        <input
                            id="telefon"
                            name="telefon"
                            type="tel"
                            placeholder="+421 ..."
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Uložiť zmeny
                    </button>
                </form>
            </div>
        </section>
    );
}

export default UpravitProfil;