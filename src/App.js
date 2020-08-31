import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "antd/dist/antd.css";
import './App.css';

const App = () => {
  const [menu, setMenu] = React.useState({ placement: "left", visible: false });

  const showMenu = () => setMenu({ ...menu, visible: true });

  const closeMenu = () => setMenu({ ...menu, visible: false });

  return (
    <Router>
      <Header showMenu={showMenu} closeMenu={closeMenu} />
      <Sidebar
        placement={menu.placement}
        visible={menu.visible}
        closeMenu={closeMenu}
      />
      <Routes />
    </Router>
  );
};

export default App;
