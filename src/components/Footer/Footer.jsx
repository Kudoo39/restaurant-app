import React from "react";
import "./Footer.css";
import { ImFacebook } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import { MdLocalShipping, MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import wolt from "../../assets/wolt1.jpg";
import tiktok from "../../assets/tiktok.jpg";
import facebook from "../../assets/facebook2.jpg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="" className="footer_name">
        SAIGON SANDWICH BAKERY
      </a>
      <h2 className="footer_vn">BÁNH MÌ SAIGON</h2>
      <div className="address">
        <h3>{t("footer.address.title")}</h3>
        <p>
          Aninkaistenkatu 16, <br />
          {t("footer.address.description")} <br />
          {t("footer.address.line")} <br />
          {t("footer.address.open")}
        </p>

        <p>
          <BsFillTelephoneFill /> &nbsp;{" "}
          <a id="phone" href="tel:0401667333">
            +358 40 166 7333
          </a>
        </p>
      </div>
      <ul className="links">
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
      <div className="footer_socials">
        <a target="_blank" href="https://www.facebook.com/saigonbakeryturku">
          <ImFacebook />
          {/* <img src={facebook} className="facebook" /> */}
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/saigonsandwichturku/"
        >
          <BsInstagram />
        </a>
        <a target="_blank" href="https://www.tiktok.com/@banhmisaigonturku">
          <FaTiktok />
          {/* <img src={tiktok} className="tiktok" /> */}
        </a>
      </div>
      <div className="copyright">
        <small>&copy; 2025 - Saigon Sandwich Bakery</small>
      </div>
    </footer>
  );
};

export default Footer;
