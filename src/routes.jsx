import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

const Routes = () => {

    const routes = [
        { route: "/", exact: true, page: <Home pageName={"Home"} /> },
        { route: "/home", page: <Home pageName={"Home"} /> },
        { route: "/about", page: <About pageName={"About"} /> },
        { route: "/contact", page: <Contact pageName={"Contact"} /> },
    ];

    return (
        <Switch>
            {routes.map(({ route, exact, page }) => (
                <Route key={route} exact={exact} path={route}>
                    {page}
                </Route>
            ))}
        </Switch>
    );
};

export default Routes;