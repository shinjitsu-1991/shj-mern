import React from "react";
import { BrowserRouter } from "react-router-dom";
import {useRoutes} from "../../routes";
import {useAuth} from "../../hooks/auth.hook";
import {AuthContext} from "../../context/AuthContext";
import Navbar from "../Navbar";
import 'materialize-css';
import Loader from "../Loader";

const App = () => {
    const {token, login, logout, userid, ready} = useAuth();
    const isAuth = !!token;
    const routes = useRoutes(isAuth);

    if(!ready) {
        return <Loader />
    }

    return(
        <AuthContext.Provider value={{
            token, login, logout, userid, isAuth
        }}>
            <BrowserRouter>
                {isAuth && <Navbar />}
                <div className="container">
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;