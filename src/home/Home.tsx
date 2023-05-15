import React from 'react';
import style from './Home.module.scss';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';

function Home() {
    return (
        <div className={style.home} id={'home'}>
            <div className={style.homeContainer}>
                <Fade duration={2000} triggerOnce>
                    <h5>Hello!</h5>
                    <h1>
                        {`I'm` + ' '}
                        <span>
                            <ReactTypingEffect
                                text={['Julia Titkova', 'Frontend Developer']}
                                speed={100}
                                eraseSpeed={100}
                                eraseDelay={1000}
                                typingDelay={1000}
                            />
                        </span>
                    </h1>
                </Fade>
            </div>
        </div>
    );
}

export default Home;
