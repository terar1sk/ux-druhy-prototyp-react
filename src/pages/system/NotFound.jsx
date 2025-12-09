import React, { useEffect } from "react";
import "../../styles/system/notfound.css";

function NotFound() {
    useEffect(() => {
        const visual = document.getElementById("visual");

        function updateRotation() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const ratio = 45 / (width / height);

            if(visual){
                visual.style.transform =
                    `translate(-50%,-50%) rotate(-${ratio}deg)`;
            }
        }

        updateRotation();
        window.addEventListener("resize", updateRotation);
        return () => window.removeEventListener("resize", updateRotation);
    }, []);

    return (
        <main className="nf-page">
            <div className="nf-bg-wrapper">
                <h1 id="visual" className="nf-404">404</h1>
            </div>

            <p className="nf-text">
                The page you’re looking for does not exist.
            </p>
        </main>
    );
}

export default NotFound;
