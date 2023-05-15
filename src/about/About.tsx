import React from 'react';
import style from './About.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../assets/images/myPhoto.jpg'
import Button from '../common/components/button/Button';

function About() {
    return (
        <div className={style.about} id={'about'}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>

                <div className={style.photo}>
                    <img src={myPhoto} alt={'Photo'}/>
                </div>

                <div className={style.description}>

                    <h3>About Me.</h3>

                    <div className={style.subTitle}>Frontend Developer</div>

                    <p>I am a software engineer specializing in creating client-oriented SPAs and user-centric
                        interfaces.
                        In my work, I have found the combination of TypeScript with React and Redux to be the best way
                        to write smooth, clean and carefully crafted code.</p>

                    <div className={style.buttons}>
                        <Button theme={'black'} text={'Download CV'} link={'#'}/>
                        <Button theme={'white'} text={'Contact Me'} link={'#contacts'}/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default About;
