import React, { useState } from "react";
import css from "./style.module.css";
import bg from "../../static/bgimage1.jpg";
import logo from "../../static/logo-sos.svg";
import xboxIcon from "../../static/xboxIcon.svg";
import steamIcon from "../../static/steamIcon.svg";
import languageArrow from "../../static/languageArrow.svg";
import langugeLine from "../../static/langugeLine.svg";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [changeArrowClass, setChangeArrowClass] = useState("languageArrow");
  const [changeLanguageClass, setChangeLanguageClass] = useState(
    "languagesChangeNone"
  );

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const languageChange = () => {
    if (changeArrowClass === "languageArrow") {
      setChangeArrowClass("languageArrow2");
    } else {
      setChangeArrowClass("languageArrow");
    }
  };

  const openLanguageMenu = () => {
    if (changeLanguageClass === "languagesChangeNone") {
      setChangeLanguageClass("languagesChange");
    } else {
      setChangeLanguageClass("languagesChangeNone");
    }
  };

  return (
    <section
      className={css.section}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={css.sectionInner}>
        <div className={css.hero}>
          <button
            onClick={menuHandler}
            className={`${css.menu__btn} ${showMenu ? css.active : ""}`}
          >
            <span className={css.bar}></span>
            <span className={css.bar}></span>
            <span className={css.bar}></span>
          </button>
          <img className={css.logo} alt={"Logo"} src={logo} />
          <ul className={`${css.list} ${showMenu ? css.active : ""}`}>
            <li className={css.item}>Main</li>
            <li className={css.item}>About</li>
            <li className={css.item}>Game features</li>
            <li className={css.item}>System requirements</li>
            <li className={css.item}>Quotes</li>
            <li className={css.logosInner}>
              <div className={css.langugageInner}>
                <h1
                  className={css.language}
                  onClick={() => {
                    languageChange();
                    openLanguageMenu();
                  }}
                >
                  ENG
                </h1>
                <div className={css[changeArrowClass]}></div>
              </div>
              <img
                src={langugeLine}
                alt="Language Line"
                className={css.langugeLine}
              />
              <img src={xboxIcon} alt="Xbox Icon" className={css.icon} />
              <img src={steamIcon} alt="Steam Icon" className={css.icon} />
              <ul className={css[changeLanguageClass]}>
                <button className={css.smallButton} onClick={openLanguageMenu}>
                  RUS
                </button>
                <button className={css.smallButton} onClick={openLanguageMenu}>
                  FRA
                </button>
                <button className={css.smallButton} onClick={openLanguageMenu}>
                  DEU
                </button>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.main}>
        <h1 className={css.title}>SURVIVE AT ALL COSTS</h1>
        <p className={css.text}>Experience new social battle royale game</p>
        <button className={css.btn}> Buy Now on Steam $14.88</button>
      </div>

      <div className={css.story}>
        <p className={css.story__text}>The story</p>
      </div>
    </section>
  );
};

export default Hero;
