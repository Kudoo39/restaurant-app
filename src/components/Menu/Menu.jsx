import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Bao from "./Bao";
import Drink from "./Drink";
import Salad from "./Salad";
import Main from "./Main";
import "./Menu.css";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <div className="menu-top">
        <h1>Menu</h1>
        <div className="menu-nav">
          <Link to="/menu">{t("menu.main")}</Link>
          <Link to="/menu/bao">{t("menu.bao")}</Link>
          <Link to="/menu/salad">{t("menu.salad")}</Link>
          <Link to="/menu/drink">{t("menu.drink")}</Link>
        </div>
      </div>

      <div className="menu">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/bao" element={<Bao />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
