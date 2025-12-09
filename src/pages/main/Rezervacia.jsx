// src/pages/Rezervacia.jsx
import "../../styles/pages/rezervacia.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Rezervacia(){
    const OPEN = 9;
    const CLOSE = 17;

    const navigate = useNavigate();

    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const generateTimes = () =>{
        const times = [];
        for(let h = OPEN; h < CLOSE; h++){
            times.push(`${h.toString().padStart(2, "0")}:00`);
            times.push(`${h.toString().padStart(2, "0")}:30`);
        }
        return times;
    };

    const baseTimeSlots = generateTimes();

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const [tariffs] = useState([
        { id: "student", name: "Dieťa / študent", price: 5 },
        { id: "adult", name: "Dospelý vstup", price: 9 },
        { id: "family", name: "Rodinný vstup", price: 22 },
    ]);

    const [counts, setCounts] = useState({
        student: 0,
        adult: 0,
        family: 0,
    });

    const handleChangeCount = (id, delta) => {
        setCounts((prev) => {
            const next = Math.max(0, prev[id] + delta);
            return { ...prev, [id]: next };
        });
    };

    const getAvailableSlots = () => {
        if(!selectedDate) return [];
        if(selectedDate !== todayStr) return baseTimeSlots;

        const isAfterClosing = now.getHours() >= CLOSE;
        if(isAfterClosing){
            return [];
        }

        return baseTimeSlots.filter((slot) => {
            const [h, m] = slot.split(":").map(Number);
            const slotMinutes = h * 60 + m;
            return slotMinutes > nowMinutes;
        });
    };

    const availableTimeSlots = getAvailableSlots();

    const totalPrice = tariffs.reduce(
        (sum, t) => sum + counts[t.id] * t.price,
        0
    );

    const formValid =
        selectedDate.trim() !== "" &&
        selectedTime.trim() !== "" &&
        totalPrice > 0;

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        setSelectedTime("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formValid) return;

        navigate("/platba", {
            state: {
                date: selectedDate,
                time: selectedTime,
                counts,
                tariffs,
                totalPrice,
            },
        });
    };

    return(
        <section className="rez-page">
            <div className="rez-header">
                <h1 className="rez-title">Rezervácia vstupu do jaskyne</h1>
                <p className="rez-subtitle">
                    Vyberte dátum, čas a lístky podľa tarify.
                </p>
            </div>

            <div className="rez-card">
                <form className="rez-form" onSubmit={handleSubmit}>

                    {/* date */}
                    <label>
                        <span>Dátum návštevy</span>
                        <input
                            type="date"
                            min={todayStr}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </label>


                    {/* time */}
                    <label>
                        <span>Čas prehliadky</span>
                        <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            disabled={
                                !selectedDate || availableTimeSlots.length === 0
                            }
                        >
                            <option value="">
                                {!selectedDate
                                    ? "Najprv vyberte dátum"
                                    : availableTimeSlots.length === 0
                                        ? "Pre tento deň nie sú voľné termíny"
                                        : "Vyberte čas"}
                            </option>
                            {availableTimeSlots.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>

                        {selectedDate === todayStr &&
                            availableTimeSlots.length === 0 && (
                                <p className="time-hint">
                                    Pre dnešný deň už nie sú dostupné termíny. Vyberte prosím iný
                                    dátum.
                                </p>
                            )}
                    </label>


                    {/* tickets */}
                    <div className="rate-section">
                        <span className="rate-section-title">
                          Počet lístkov podľa tarify
                        </span>

                        <div className="rate-rows">
                            {tariffs.map((t) => (
                                <div className="rate-row" key={t.id}>
                                    <div className="rate-info">
                                        <strong>{t.name}</strong>
                                        <span>{t.price} € / osoba</span>
                                    </div>

                                    <div className="rate-counter">
                                        <button
                                            type="button"
                                            onClick={() => handleChangeCount(t.id, -1)}
                                        >
                                            –
                                        </button>
                                        <span>{counts[t.id]}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleChangeCount(t.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* note */}
                    <label>
                        <span>Poznámka</span>
                        <textarea
                            rows="3"
                            placeholder="Chcem prehliadku so sprievodcom"
                        />
                    </label>


                    {/* price summary */}
                    <div className="total-line">
                        <span>Spolu</span>
                        <span className="total-amount">{totalPrice} €</span>
                    </div>


                    {/* submit */}
                    <button
                        type="submit"
                        className="rez-submit"
                        disabled={!formValid}
                    >
                        Pokračovať
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Rezervacia;
