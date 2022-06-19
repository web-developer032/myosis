import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import { RentableContext } from "./Contexts/RentablesContext";

import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Rentables from "./components/Rentables/Rentables";
import Private from "./components/Private/Private";
import Login from "./components/Login/Login";
import Inquiry from "./components/Inquiry/Inquiry";
import RentableModal from "./components/Rentables/RentableModal";
import LoadingSpinner from "./components/Utils/LoadingSpinner/LoadingSpinner";

// IMPORTING IMAGES
import sphereImg from "./assets/images/sphere.png";
import boothImg from "./assets/images/booth.png";
import propsImg from "./assets/images/props.png";

function App() {
    const [userData, setUserData] = useState({
        user: false,
        isLoading: false,
        loginForm: false,
    });

    let rentables = [
        {
            id: "1",
            name: "Voronoi Sphere",
            img: sphereImg,
            description:
                "In mathematics, a Voronoi diagram is a partition of a plane into regions close to each of a given set of objects. In the simplest case, these objects are just finitely many points in the plane (called seeds, sites, or generators). For each seed there is a corresponding region, called a Voronoi cell, consisting of all points of the plane closer to that seed than to any other.",
            videoLinks: [
                "https://www.youtube.com/embed/tgbNymZ7vqY",
                "https://www.youtube.com/embed/tgbNymZ7vqY",
                "https://www.youtube.com/embed/tgbNymZ7vqY",
            ],
            documentationLink: "#",
            price: 19000,
            size: "3M",
            color: false,
            led: true,
        },
        {
            id: "2",
            name: "Voronoi Booth",
            img: boothImg,
            description:
                "In mathematics, a Voronoi diagram is a partition of a plane into regions close to each of a given set of objects. In the simplest case, these objects are just finitely many points in the plane (called seeds, sites, or generators). For each seed there is a corresponding region, called a Voronoi cell, consisting of all points of the plane closer to that seed than to any other.",
            videoLinks: [
                "https://www.youtube.com/embed/tgbNymZ7vqY",
                "https://www.youtube.com/embed/tgbNymZ7vqY",
                "https://www.youtube.com/embed/tgbNymZ7vqY",
            ],
            documentationLink: "#",
            price: 55000,
            size: "12M",
            color: false,
            led: true,
        },
        {
            id: "3",
            name: "Props",
            img: propsImg,
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea enim sed perspiciatis reprehenderit, tempore nihil quasi accusantium. Odit cupiditate autem reiciendis quaerat corrupti mollitia iste minus magnam nesciunt natus?",
            videoLinks: [
                "https://www.youtube.com/embed/tgbNymZ7vqY",
                "https://www.youtube.com/embed/tgbNymZ7vqY",
                "https://www.youtube.com/embed/tgbNymZ7vqY",
            ],
            documentationLink: "#",
            price: 32000,
            size: "2M",
            color: true,
            led: false,
        },
    ];

    return userData.isLoading ? (
        <div
            className="spinner-container"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <LoadingSpinner />
        </div>
    ) : (
        <RentableContext.Provider value={{ rentables, userData, setUserData }}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Projects />} />
                        <Route path="rentables">
                            <Route index element={<Rentables />}></Route>
                            <Route path=":id" element={<RentableModal />}></Route>
                        </Route>
                        <Route path="inquiry" element={<Inquiry />}></Route>
                        <Route path="private" element={<Private />}></Route>
                        <Route path="*" element={<Projects />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </RentableContext.Provider>
    );
}

export default App;
