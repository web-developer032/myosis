import React, { useState, useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { anime } from "react-anime";

function Rentable({ rentable, back }) {
    const [routeChange, setRouteChange] = useState(false);

    const img = useRef(null);

    const getAxis = (e) => {
        setRouteChange(true);
    };

    useEffect(() => {
        back &&
            (() => {
                if (innerWidth <= 1030) return;
                anime({
                    targets: "figure #xoxo",
                    translateX: [
                        document.querySelector("#rentables-container").getBoundingClientRect()
                            .width /
                            2 -
                            document.querySelector("#x").getBoundingClientRect().width / 2,
                        0,
                    ],
                    scale: [1.3, 1],
                    easing: "linear",
                    duration: 350,
                });
            })();
        back = false;
    });

    return (
        <div>
            <article className="rentable" onClick={getAxis}>
                <figure>
                    <div id={`${back ? "xoxo" : "x"}`}>
                        <img ref={img} src={rentable.img} alt="" />
                    </div>
                </figure>
                <div className="rentable-name">{rentable.name}</div>
            </article>

            {routeChange && (
                <Navigate
                    to={`/rentables/${rentable.id}?x=${img.current.x}&y=${img.current.y}&width=${
                        document.querySelector("#rentables-container").getBoundingClientRect()
                            .width /
                            2 -
                        document.querySelector("#x").getBoundingClientRect().width / 2
                    }`}
                />
            )}
        </div>
    );
}

export default Rentable;
