import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { anime } from "react-anime";

import downloadIcon from "../../assets/icons/doc-icon.png";
import arrowLeftIcon from "../../assets/icons/arrow-left.png";
import arrowRightIcon from "../../assets/icons/arrow-right.png";

import vidImg1 from "../../assets/images/vid1.png";
import vidImg2 from "../../assets/images/vid2.png";
import vidImg3 from "../../assets/images/vid3.png";

import { RentableContext } from "../../Contexts/RentablesContext";

function RentableModal() {
    const { rentables } = useContext(RentableContext);
    const { id } = useParams();

    let imgsArray = [vidImg1, vidImg2, vidImg3];

    const [rentableStore, setRentableStore] = useState({
        rentable: rentables.find((rentable) => rentable.id === id),
        index: rentables.findIndex((rentable) => rentable.id === id),
        mvNext: false,
        mvPrev: false,
    });

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    let xCord = parseInt(searchParams.get("x"));
    let yCord = parseInt(searchParams.get("y"));
    let divWidth = parseInt(searchParams.get("width"));

    const [popup, setPopup] = useState({
        isOpen: false,
        link: "",
    });

    function openPopup(link) {
        setPopup({
            isOpen: true,
            link,
        });

        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        setPopup({
            isOpen: false,
            link: null,
        });

        document.body.style.overflow = "hidden auto";
    }

    let startupAnimation = true;
    useEffect(() => {
        const startupAnimationFun = () => {
            if (innerWidth <= 1030) return;
            let myX = xCord < innerWidth / 2 ? -divWidth : divWidth;

            anime
                .timeline({
                    easing: "linear",
                })
                .add({
                    targets: "#main_img",
                    translateX: [myX, 0],
                    translateY: [yCord - 213, 0],
                    scale: [0.7, 1.25],
                    duration: 300,
                })
                .add({
                    targets: ".arrow",
                    opacity: [0, 1],
                    duration: 300,
                })
                .add({
                    targets: "#documentation",
                    opacity: [0, 1],
                    translateY: [-10, 0],
                    duration: 300,
                })
                .add({
                    targets: "#price",
                    opacity: [0, 1],
                    top: ["10%", "15%"],
                    duration: 300,
                })
                .add({
                    targets: "#ytlink-1",
                    opacity: [0, 1],
                    duration: 200,
                })
                .add({
                    targets: "#ytlink-2",
                    opacity: [0, 1],
                    duration: 200,
                })
                .add({
                    targets: "#ytlink-3",
                    opacity: [0, 1],
                    duration: 200,
                })
                .add({
                    targets: "#dwnld",
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 300,
                });
        };
        startupAnimation && startupAnimationFun();
        startupAnimation = false;
    }, []);

    const forwardAnimation = () => {
        anime
            .timeline({
                easing: "linear",
                complete: () => {
                    // here
                    setRentableStore((prevStore) => ({
                        ...prevStore,
                        mvNext: false,
                    }));
                },
            })
            .add({
                targets: "#main_img",
                translateX: [300, 0],
                opacity: [0, 1],
                duration: 500,
            })
            .add({
                targets: "#price",
                translateX: [300, 0],
                opacity: [0, 1],
                duration: 500,
            })
            .add({
                targets: ["#documentation", "#dwnld"],
                translateX: [100, 0],
                opacity: [0, 1],
                duration: 250,
            })
            .add({
                targets: ["#ytlink-1", "#ytlink-2", "#ytlink-3"],
                opacity: [0, 1],
                duration: 100,
                delay: anime.stagger(100),
            });
    };
    rentableStore.mvNext && forwardAnimation();

    const backAnimation = () => {
        anime
            .timeline({
                easing: "linear",
                complete: () => {
                    setRentableStore((prevStore) => ({
                        ...prevStore,
                        mvPrev: false,
                    }));
                },
            })
            .add({
                targets: "#main_img",
                translateX: [-300, 0],
                opacity: [0, 1],
                duration: 500,
            })
            .add({
                targets: "#price",
                translateX: [-300, 0],
                opacity: [0, 1],
                duration: 500,
            })
            .add({
                targets: ["#documentation", "#dwnld"],
                translateX: [-100, 0],
                opacity: [0, 1],
                duration: 250,
            })
            .add({
                targets: ["#ytlink-1", "#ytlink-2", "#ytlink-3"],
                opacity: [0, 1],
                duration: 100,
                delay: anime.stagger(100),
            });
    };
    rentableStore.mvPrev && backAnimation();

    let time = 150;
    function handleMoveLeft() {
        if (rentableStore.index === 0) {
            navigate("/rentables?back=true");
            return;
        }
        if (innerWidth <= 1030) {
            setRentableStore({
                index: rentableStore.index - 1,
                rentable: rentables[rentableStore.index - 1],
                mvNext: false,
                mvPrev: false,
            });
            return;
        }
        anime
            .timeline({
                easing: "linear",
                complete: () => {
                    setRentableStore({
                        index: rentableStore.index - 1,
                        rentable: rentables[rentableStore.index - 1],
                        mvNext: false,
                        mvPrev: true,
                    });
                },
            })
            .add({
                targets: "#main_img",
                translateX: [0, 300],
                opacity: [1, 0],
                duration: time,
            })
            .add({
                targets: "#price",
                translateX: [0, 300],
                opacity: [1, 0],
                duration: time,
            })
            .add({
                targets: ["#documentation", "#dwnld"],
                translateX: [0, 300],
                opacity: [1, 0],
                duration: time,
            })
            .add({
                targets: ["#ytlink-1", "#ytlink-2", "#ytlink-3"],
                opacity: [1, 0],
                duration: 100,
                delay: anime.stagger(100),
            });
    }

    function handleMoveRight() {
        if (rentableStore.index + 1 === rentables.length) return;
        if (innerWidth <= 1030) {
            setRentableStore({
                index: rentableStore.index + 1,
                rentable: rentables[rentableStore.index + 1],
                mvNext: false,
                mvPrev: false,
            });
            return;
        }
        anime
            .timeline({
                easing: "linear",
                complete: () => {
                    setRentableStore({
                        index: rentableStore.index + 1,
                        rentable: rentables[rentableStore.index + 1],
                        mvNext: true,
                        mvPrev: false,
                    });
                },
            })
            .add({
                targets: "#main_img",
                translateX: [0, -300],
                opacity: [1, 0],
                duration: time,
            })
            .add({
                targets: "#price",
                translateX: [0, -300],
                opacity: [1, 0],
                duration: time,
            })
            .add({
                targets: ["#documentation", "#dwnld"],
                translateX: [0, -300],
                opacity: [1, 0],
                duration: time,
            })
            .add({
                targets: ["#ytlink-1", "#ytlink-2", "#ytlink-3"],
                opacity: [1, 0],
                duration: 100,
                delay: anime.stagger(100),
            });
    }

    let { rentable = {} } = rentableStore;

    return (
        <section className="rentable-modal container">
            <section className="rentable-details">
                <div className="arrow arrow-left" onClick={handleMoveLeft}>
                    <img src={arrowLeftIcon} alt="" />
                </div>
                <div className="arrow arrow-right" onClick={handleMoveRight}>
                    <img src={arrowRightIcon} alt="" />
                </div>

                <div className="details details-left">
                    <div id="documentation">
                        <h3>Documentation</h3>
                        <p>{rentable.description}</p>
                    </div>

                    <div className="icon" id="dwnld">
                        <a href={rentable.documentationLink}>
                            Download
                            <br />
                            <span>Full spec sheet</span>
                        </a>
                        <img src={downloadIcon} alt="" />
                    </div>
                </div>

                <figure>
                    <img
                        id="main_img"
                        src={rentable.img}
                        alt=""
                        style={{ pointerEvents: "none" }}
                    />
                </figure>

                <div className="details details-right" id="price">
                    <h3>{rentable.name}</h3>
                    <p>
                        <span>DAILY: </span>
                        <br />฿ {rentable.price.toLocaleString() + ".00"} <span>(excl. VAT)</span>
                    </p>
                    <a href="#">Contact Us</a>
                </div>
            </section>

            <section className="rentable-videos">
                {rentable.videoLinks.map((link, i) => (
                    <div
                        className="image-container"
                        key={i}
                        id={`ytlink-${i + 1}`}
                        onClick={() => openPopup(link)}
                    >
                        <figure>
                            <img src={imgsArray[i]} alt="" />
                        </figure>
                    </div>
                ))}
            </section>

            {popup.isOpen && (
                <section className="popup-container" onClick={closePopup}>
                    <button className="btn btn-small" id="popup-close" onClick={closePopup}>
                        &#10005;
                    </button>

                    <div className="popup-content">
                        <iframe src={popup.link}></iframe>
                    </div>
                </section>
            )}
        </section>
    );
}

export default RentableModal;
