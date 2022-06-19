import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Login.css";

import lockIcon from "../../assets/icons/lock.png";
import personIcon from "../../assets/icons/person.png";
import keyIcon from "../../assets/icons/key.png";

function Login({ userData, setUserData }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginForm = async (e) => {
        e.preventDefault();

        setUserData({ ...userData, isLoading: true });

        try {
            let name = e.target.name.value.trim().toLowerCase();
            let password = e.target.password.value.trim();

            const res = await fetch("Users.json", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            if (res.status === 200) {
                const users = await res.json();

                let user = false;
                users.forEach((userJson) => {
                    if (userJson.name.toLowerCase() === name) {
                        if (userJson.password == password) {
                            user = userJson;
                            return;
                        }
                    }
                });
                setUserData({ user, isLoading: false, loginForm: false });
                navigate("/private");
            } else console.log("Res Error:", res);
            return;

            // --------------------------------
        } catch (err) {
            alert("Some Error Occured");
            console.log("Error:", err);
            setUserData({ ...userData, isLoading: false, loginForm: false });
            return;
        }
    };

    const handleCancelLogin = (e) => {
        if (e.target.classList.contains("login-container"))
            setUserData({ ...userData, loginForm: false });

        if (location.pathname === "/private") {
            navigate("/");
        }
        return;
    };

    return (
        <section className="login-container active" onClick={handleCancelLogin}>
            <form action="#" className="login-form" onSubmit={handleLoginForm}>
                <h2>
                    Private Portal Login: <img className="icon" src={lockIcon} alt="lock icon" />
                </h2>

                <div className="form-field">
                    <img className="icon" src={personIcon} alt="person icon" />
                    <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="form-field">
                    <img className="icon" src={keyIcon} alt="key icon" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>

                <button className="btn">Login</button>
            </form>
        </section>
    );
}

export default Login;
