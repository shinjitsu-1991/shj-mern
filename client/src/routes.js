import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"
import Links from "./pages/Links";
import LinkCreate from "./pages/LinkCreate";
import Auth from "./pages/Auth";
import Detail from "./pages/Detail";

export const useRoutes = isAuth => {
    if(isAuth) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <Links />
                </Route>
                <Route path="/link-create" exact>
                    <LinkCreate />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Redirect to="/link-create" />
            </Switch>
        );
    }
    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/"/>
        </Switch>
    );
}