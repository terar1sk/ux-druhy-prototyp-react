import "../../styles/pages/auth.css";
import { Link, useNavigate } from "react-router-dom";


function Prihlasenie(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/ucet");
    };

    return(
        <section className="auth-page">
            <header className="auth-hero">
                <h1 className="auth-title">Prihlásenie</h1>
                <p className="auth-subtitle">
                    Prihláste sa do svojho účtu a skontrolujte svoje rezervácie.
                </p>
            </header>

            <div className="auth-card">
                <form className="auth-form" onSubmit={handleSubmit}>
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

                    <button type="submit" className="auth-btn">
                        Prihlásiť sa
                    </button>
                </form>

                <p className="auth-switch">
                    Nemáte ešte účet?{" "}
                    <Link to="/registracia">Zaregistrujte sa</Link>
                </p>
            </div>
        </section>
    );
}

export default Prihlasenie;