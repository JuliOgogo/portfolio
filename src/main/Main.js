import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../assets/images/myPhoto.jpg'

function Main() {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi There!</span>
                    <h1>I am <span>Julia Titkova</span></h1>
                    <p>Frontend Developer based in Moscow</p>
                    <div className={style.btnContainer}>
                        <a href="#">download my cv</a>
                    </div>
                </div>
                <div className={style.photo}>
                    <img src={myPhoto} alt={'Photo'}/>
                </div>
            </div>
        </div>
    );
}

export default Main;