import React, { useContext, useEffect } from "react";
import { RentableContext } from "../../Contexts/RentablesContext";
import "./Private.css";

function Private() {
    let { userData, setUserData } = useContext(RentableContext);

    useEffect(() => {
        if (!userData.user) {
            setUserData({ ...userData, loginForm: true });
            return;
        }
    }, []);

    return userData.user ? (
        <div className="container">Private Route for {userData.user.name}</div>
    ) : (
        ""
    );
    // return <div className="container">Private Route for {userData.user.name}</div>;
}

export default Private;
