import { useContext } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { RentableContext } from "../../Contexts/RentablesContext";
import Login from "../Login/Login";
import "./Header.css";

function Header() {
    let { userData, setUserData } = useContext(RentableContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async (e) => {
        setUserData({ ...userData, user: false });
        if (location.pathname === "/private") {
            navigate("/");
        }
        return;
    };

    const handlePrivateRoute = (e) => {
        e.preventDefault();
        if (userData.user) {
            navigate("/private");
            return;
        } else setUserData({ ...userData, loginForm: true });
        // e.target.classList.add("active");
    };

    return (
        <>
            <header>
                <div className="logo">
                    <span>Logo Text</span>

                    {userData.user && (
                        <button className="btn" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "active" : undefined)}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/rentables"
                                className={({ isActive }) => (isActive ? "active" : undefined)}
                            >
                                Rentables
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/inquiry"
                                className={({ isActive }) => (isActive ? "active" : undefined)}
                            >
                                Inquiry
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/private"
                                onClick={handlePrivateRoute}
                                className={({ isActive }) => (isActive ? "active" : undefined)}
                            >
                                Private
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            {userData.loginForm && <Login userData={userData} setUserData={setUserData} />}

            <Outlet />
        </>
    );
}

export default Header;
