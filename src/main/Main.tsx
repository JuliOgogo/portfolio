import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../assets/images/myPhoto.jpg'
import Button from "../common/components/button/Button";

function Main() {
    return (
        <div className={style.main} id={'home'}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <h3>Hi There!</h3>
                    <h1>I'm <span>Julia Titkova</span></h1>
                    <p>Frontend Developer based in Moscow</p>
                    <Button theme={'black'} text={'Download CV'} link={'#'}/>
                    <Button theme={'white'} text={'Contact Me'} link={'#contacts'}/>
                </div>
                <div className={style.photo}>
                    <img src={myPhoto} alt={'Photo'}/>
                </div>
            </div>
        </div>
    );
}

export default Main;