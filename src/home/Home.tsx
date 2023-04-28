import React from 'react';
import style from './Home.module.scss';

function Home() {
    return (
        <div className={style.home} id={'home'}>
            <div className={style.homeContainer}>

                <h5>Hello!</h5>
                <h1>I'm Julia Titkova</h1>

            </div>
        </div>
    );
}

export default Home;
