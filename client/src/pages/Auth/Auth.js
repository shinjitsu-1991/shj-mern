import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";

const Auth = () => {
    const auth = useContext(AuthContext);
    const {loading, error, request, clearError} = useHttp();
    const message = useMessage();

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    const [form, setForm] = useState({
        email: "", password: ""
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        }
        catch (e) {}
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }
        catch (e) {}
    }

    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Link shortening</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div className="input-field">
                                <input
                                    onChange={changeHandler}
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    className="yellow-input"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    onChange={changeHandler}
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={form.password}
                                    className="yellow-input"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            onClick={loginHandler}
                            className="btn yellow darken-4 login-btn"
                            disabled={loading}
                        >
                            Login
                        </button>
                        <button
                            onClick={registerHandler}
                            className="btn grey lighten-1 black-text"
                            disabled={loading}
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;