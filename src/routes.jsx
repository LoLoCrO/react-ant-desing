import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const Routes = () => {

    const routes = [
        { route: "/", page: <Home pageName={"Home"} /> },
        { route: "/home", page: <Home pageName={"Home"} /> },
        { route: "/about", page: <About pageName={"About"} /> },
        { route: "/contact", page: <Contact pageName={"Contact"} /> },
    ];

    return (
        <Switch>
            {routes.map(({ route, page }) =>
                <Route key={route} path={route}>
                    {page}
                </Route>
            )}
        </Switch>
    );
}

export default Routes;
