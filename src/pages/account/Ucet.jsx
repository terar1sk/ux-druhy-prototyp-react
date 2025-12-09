import "../../styles/pages/ucet.css";
import { useNavigate } from "react-router-dom";


function Ucet(){
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const goToEditProfile = () => {
        navigate("/upravit-profil");
    };

    const goToChangePassword = () => {
        navigate("/zmenit-heslo");
    };

    const user = {
        name: "Dmytro Isai",
        email: "dimaisai30@gmail.com",
    };

    const initials = user.name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .toUpperCase();

    const reservations = [
        {
            id: 1,
            type: "Dospelý vstup",
            date: "24. 12. 2025",
            time: "10:30",
            status: "Potvrdené",
        },
        {
            id: 2,
            type: "Rodinný vstup",
            date: "5. 1. 2026",
            time: "12:00",
            status: "Čaká na úhradu",
        },
    ];

    return(
        <section className="account-page">
            <header className="account-hero">
                <h1 className="account-title">Môj účet</h1>
                <p className="account-subtitle">
                    Spravujte svoje rezervácie a údaje o účte.
                </p>
            </header>

            <div className="account-layout">
                <aside className="account-sidebar">
                    <div className="account-avatar">{initials}</div>

                    <div>
                        <div className="account-name">{user.name}</div>
                        <div className="account-email">{user.email}</div>
                    </div>

                    <div className="account-actions">
                        <button
                            className="account-btn"
                            type="button"
                            onClick={goToEditProfile}
                        >
                            Upraviť profil
                        </button>

                        <button
                            className="account-btn"
                            type="button"
                            onClick={goToChangePassword}
                        >
                            Zmeniť heslo
                        </button>

                        <button
                            className="account-btn account-btn--danger"
                            type="button"
                            onClick={handleLogout}
                        >
                            Odhlásiť sa
                        </button>
                    </div>
                </aside>

                <main className="account-main">
                    <section className="account-section">
                        <h2 className="account-section-title">Moje rezervácie</h2>
                        <p className="account-section-subtitle">
                            Prehľad vašich nadchádzajúcich návštev jaskyne.
                        </p>

                        <div className="reservation-list">
                            {reservations.map((r) => (
                                <div className="reservation-card" key={r.id}>
                                    <div className="reservation-main">
                                        <div className="reservation-type">{r.type}</div>
                                        <div className="reservation-meta">
                                            {r.date} · {r.time}
                                        </div>
                                    </div>

                                    <span className="reservation-tag">{r.status}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </section>
    );
}

export default Ucet;