import css from "./style.module.css";
import React from 'react'
import bg from "../../static/bgimage1.jpg";
import logo from "../../static/logo-sos.svg";

const Hero = () => {

    return (
        <section className={css.section} style={{ backgroundImage: `url(${bg})` }}>
            <div className={css.hero}>

                <img className={css.logo} alt={"image"} src={logo} />
                <ul className={css.list}>
                    <li className={css.item}> Main</li>
                    <li className={css.item}> About</li>
                    <li className={css.item}> Game features</li>
                    <li className={css.item}> System requirements</li>
                    <li className={css.item}> Quotes</li>
                </ul>
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