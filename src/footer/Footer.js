import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.name}>Julia Titkova</h2>
                <div className={style.elements}>
                    <div className={style.element}></div>
                    <div className={style.element}></div>
                    <div className={style.element}></div>
                    <div className={style.element}></div>
                </div>
                <span className={style.text}>Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;