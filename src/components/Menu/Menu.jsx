import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Bao from "./Bao";
import Drink from "./Drink";
import Salad from "./Salad";
import Main from "./Main";
import "./Menu.css";
import { useTranslation } from "react-i18next";
import SubscriptionForm from "../SubscriptionForm";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu-container">
      <SubscriptionForm />
      <div className="facebook-post">
        <iframe
          src="https://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2fsaigonbakeryturku&width=500&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=555"
          scrolling="yes"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="menu-top">
        <h1>Menu</h1>
        <div className="menu-nav">
          <Link to="/main">{t("menu.main")}</Link>
          <Link to="/bao">{t("menu.bao")}</Link>
          <Link to="/salad">{t("menu.salad")}</Link>
          <Link to="/drink">{t("menu.drink")}</Link>
        </div>
      </div>

      <div className="menu">
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/drink" element={<Drink />} />
          <Route path="/salad" element={<Salad />} />
          <Route path="/bao" element={<Bao />} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
