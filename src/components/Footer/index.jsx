import React from "react";
import css from "./style.module.css";
import logo from "../../static/logo-sos.svg";
import logoicon1 from "../../static/logoicon1.svg";
import logoicon2 from "../../static/logoicon2.svg";
import logoicon3 from "../../static/logoicon3.svg";
import logoicon4 from "../../static/logoicon4.svg";
const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.container}>
        <div className={css.inner}>
          <img src={logo} alt="" className={css.logo} />
          <ul className={css.list}>
            <li className={css.item}> Main</li>
            <li className={css.item}> About</li>
            <li className={css.item}> Game features</li>
            <li className={css.item}> System requirements</li>
            <li className={css.item}> Quotes</li>
          </ul>
          <ul className={css.icons__list}>
            <li className={css.icons__item}>
              <img src={logoicon1} alt="" />
            </li>
            <li className={css.icons__item}>
              <img src={logoicon2} alt="" />
            </li>
            <li className={css.icons__item}>
              <img src={logoicon3} alt="" />
            </li>
            <li className={css.icons__item}>
              <img src={logoicon4} alt="" />
            </li>
          </ul>
        </div>
        <div className={css.wrapper}>
          <p className={css.author}>
            © 2018 Outpost Games, Inc. All Rights Reserved
          </p>
          <p className={css.privat}>
            Privacy Policy Terms of Services Code of Conduct
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;