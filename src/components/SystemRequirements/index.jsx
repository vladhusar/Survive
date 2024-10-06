import React from 'react';
import css from "./style.module.css"; 
import bg4 from "../../static/bgimage4.jpg";

const SystemRequirements = () => {
  return (
    <section className={css.section} style={{ backgroundImage: `url(${bg4})` }}>
      <div className={css.firsttitle}>
        <h2 className={css.title}>CAN MY COMPUTER RUN THIS GAME?</h2>
        <h3 className={css.subtitle}>SYSTEM REQUIREMENTS</h3>
        </div>
        <div className={css.requirements}>
          <div className={css.requirementItem}>
            <h2>OS:</h2> Windows 7 64-bit only (No OSX support at this time)
          </div>
          <div className={css.requirementItem}>
            <h2>PROCESSOR:</h2> Intel Core 2 Duo @ 2.4 GHz or AMD Athlon X2 @ 2.8 GHz
          </div>
          <div className={css.requirementItem}>
            <h2>MEMORY:</h2> 8GB RAM
          </div>
          <div className={css.requirementItem}>
            <h2>STORAGE:</h2> 8GB available space
          </div>
          <div className={css.requirementItem}>
            <h2>GRAPHICS:</h2> NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
          </div>
        </div>
    </section>
  );
};

export default SystemRequirements;
