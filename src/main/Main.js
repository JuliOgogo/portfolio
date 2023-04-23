import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../assets/images/myPhoto.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'

function Main() {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <h3>Hi There!</h3>
                    <h1>I'm <span>Julia Titkova</span></h1>
                    <p>Frontend Developer based in Moscow</p>
                    <div className={style.btnContainer}>
                        <a href="#"><FontAwesomeIcon icon={faDownload} className={style.icon}/>download my cv</a>
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