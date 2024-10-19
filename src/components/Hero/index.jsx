import css from "./style.module.css";
import React, { useState } from "react";
import bg from "../../static/bgimage1.jpg";
import logo from "../../static/logo-sos.svg";
import xboxIcon from "../../static/xboxIcon.svg";
import steamIcon from "../../static/steamIcon.svg";
import languageArrow from "../../static/languageArrow.svg";
import langugeLine from "../../static/langugeLine.svg";

// menu__btn.addEventListener("click", () => {
//   menuBtn.classList.toggle("active");
//   list.classList.toggle("active");
// });

const Hero = () => {
  const [changeArrowClass, setChangeArrowClass] = useState("languageArrow");
  const [changeLanguageClass, setChangeLanguageClass] = useState(
    "languagesChangeNone"
  );
  const [show, setShow] = useState(false);
  const menuHandler = () => {
    setShow(!show);
    console.log(show);
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
    <section className={css.section} style={{ backgroundImage: `url(${bg})` }}>
      <div className={css.sectionInner}>
        <div className={css.hero}>
          <button
            onClick={() => menuHandler()}
            className={show ? css.menu__btn + " " + css.active : css.menu__btn}
          >
            <span className={css.bar}></span>
            <span className={css.bar}></span>
            <span className={css.bar}></span>
          </button>
          <img className={css.logo} alt={"image"} src={logo} />
          <ul className={show ? css.list + " " + css.active : css.list}>
            <li className={css.item}> Main</li>
            <li className={css.item}> About</li>
            <li className={css.item}> Game features</li>
            <li className={css.item}> System requirements</li>
            <li className={css.item}> Quotes</li>

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
                <div className={`${css[changeArrowClass]}`}></div>
              </div>
              <img src={langugeLine} alt="langugeLine" className={css.langugeLine} />
              <img src={xboxIcon} alt="icon" className={css.icon} />
              <img src={steamIcon} alt="icon" className={css.icon} />
              <div className={`${css[changeLanguageClass]}`}>
                <button className={css.smallButton} onClick={openLanguageMenu}>
                  RUS
                </button>
                <button className={css.smallButton} onClick={openLanguageMenu}>
                  FRA
                </button>
                <button className={css.smallButton} onClick={openLanguageMenu}>
                  DEU
                </button>
              </div>
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