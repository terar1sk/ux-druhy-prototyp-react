// src/pages/OJaskyni.jsx
import "../../styles/pages/o-jaskyni.css";

// Import images
import hero1 from "../../assets/img/ice-cave-1.jpg";
import hero2 from "../../assets/img/ice-cave-2.jpg";

import history1 from "../../assets/img/cavemain.jpg";
import history2 from "../../assets/img/cave-ice.jpg";
import historyUNESCO from "../../assets/img/UNESCO.jpg";

import highlight1 from "../../assets/img/cave-people.jpg";
import highlight2 from "../../assets/img/cave-turism.jpg";
import highlight3 from "../../assets/img/cave-turists.jpg";
import highlight4 from "../../assets/img/family-cave.jpg";
import highlight5 from "../../assets/img/jasnina-outside.jpg";
import highlight6 from "../../assets/img/cave.jpg";


function Onas() {
    return (
        <section className="about-page">
            {/* hero */}
            <header className="about-hero">
                <h1 className="about-title">O Dobšinskej ľadovej jaskyni</h1>
                <p className="about-subtitle">
                    Najväčšia ľadová jaskyňa v Európe – zapísaná v zozname svetového dedičstva UNESCO.
                </p>
            </header>

            {/* hero image */}
            <div className="about-images">
                <img src={hero1} alt="Interiér ľadovej jaskyne" />
                <img src={hero2} alt="Ľadové útvary v jaskyni" />
            </div>

            {/* history */}
            <section className="about-section">
                <div className="about-section-head">
                    <h2 className="section-title">História a zaujímavosti</h2>
                    <p className="section-subtitle">Ako vznikla a prečo je výnimočná.</p>
                </div>

                <div className="history-list">

                    {/* discovery */}
                    <article className="history-card">
                        <div className="history-media">
                            <img src={history1} alt="Objavenie jaskyne" />
                        </div>
                        <div className="history-content">
                            <h3 className="history-title">Objavenie jaskyne</h3>
                            <p className="history-text">
                                Dobšinská ľadová jaskyňa bola objavená v roku 1870 Eugenom Ruffínym.
                                Už o rok neskôr bola sprístupnená verejnosti.
                            </p>
                            <button className="history-btn">Pozrieť galériu</button>
                        </div>
                    </article>

                    {/* unique in the world */}
                    <article className="history-card">
                        <div className="history-media">
                            <img src={history2} alt="Svetový ľadový unikát" />
                        </div>
                        <div className="history-content">
                            <h3 className="history-title">Svetový unikát</h3>
                            <p className="history-text">
                                Jaskyňa patrí medzi najväčšie ľadové jaskyne Európy. Ľad dosahuje miestami hrúbku až 25 metrov.
                            </p>
                            <button className="history-btn">Prečítať viac</button>
                        </div>
                    </article>

                    {/* unesco */}
                    <article className="history-card">
                        <div className="history-media history-media--logo">
                            <img src={historyUNESCO} alt="UNESCO" />
                        </div>
                        <div className="history-content">
                            <h3 className="history-title">Zoznam UNESCO</h3>
                            <p className="history-text">
                                V roku 2000 bola jaskyňa zapísaná na Zoznam svetového dedičstva UNESCO.
                            </p>
                            <button className="history-btn">Viac o UNESCO</button>
                        </div>
                    </article>

                </div>
            </section>


            {/* FAQ list */}
            <section className="about-section">
                <div className="about-section-head">
                    <h2 className="section-title">Prečo navštíviť jaskyňu</h2>
                    <p className="section-subtitle">
                        Objavte, čo robí toto miesto výnimočným.
                    </p>
                </div>

                <div className="highlight-grid">

                    <article className="highlight-item">
                        <img src={highlight1} alt="Ľadové útvary" />
                        <h3 className="highlight-title">Jedinečné ľadové útvary</h3>
                        <p className="highlight-text">
                            Impozantné ľadové dómy, kaskády a stĺpy vytvárajú neopakovateľný zážitok.
                        </p>
                    </article>

                    <article className="highlight-item">
                        <img src={highlight2} alt="Chladná atmosféra" />
                        <h3 className="highlight-title">Chladivá atmosféra</h3>
                        <p className="highlight-text">
                            Teplota v jaskyni sa drží okolo 0 °C počas celého roka.
                        </p>
                    </article>

                    <article className="highlight-item">
                        <img src={highlight3} alt="Sprievodca" />
                        <h3 className="highlight-title">Prehliadky so sprievodcom</h3>
                        <p className="highlight-text">
                            Trasu sprevádza odborný výklad skúseného sprievodcu.
                        </p>
                    </article>

                    <article className="highlight-item">
                        <img src={highlight4} alt="Pre rodiny" />
                        <h3 className="highlight-title">Pre celú rodinu</h3>
                        <p className="highlight-text">
                            Nenáročná trasa vhodná aj pre deti a starších návštevníkov.
                        </p>
                    </article>

                    <article className="highlight-item">
                        <img src={highlight5} alt="Dostupnosť" />
                        <h3 className="highlight-title">Skvelá dostupnosť</h3>
                        <p className="highlight-text">
                            Jaskyňa je ľahko dostupná pešo zo Slovenského raja.
                        </p>
                    </article>

                    <article className="highlight-item">
                        <img src={highlight6} alt="Ekoturistika" />
                        <h3 className="highlight-title">Ekologická turistika</h3>
                        <p className="highlight-text">
                            Podporujete ochranu prírodného dedičstva Slovenska.
                        </p>
                    </article>

                </div>
            </section>
        </section>
    );
}

export default Onas;
