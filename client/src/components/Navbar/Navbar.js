import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <span className="brand-logo">CutLink</span>
                <ul className="right hide-on-med-and-down" id="nav-mobile">
                    <li><NavLink to="/link-create">Link create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;