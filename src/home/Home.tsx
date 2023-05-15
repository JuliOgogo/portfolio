import React from 'react';
import style from './Home.module.scss';
import {Fade} from 'react-awesome-reveal';

function Home() {
    return (
        <div className={style.home} id={'home'}>
            <div className={style.homeContainer}>
                <Fade duration={2000} triggerOnce>
                    <h5>Hello!</h5>
                    <h1>I'm Julia Titkova</h1>
                </Fade>
            </div>
        </div>
    );
}

export default Home;
