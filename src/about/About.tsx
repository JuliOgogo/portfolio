import React from 'react';
import style from './About.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import myPhoto from '../assets/images/myPhoto.jpg'
import Button from '../common/components/button/Button';

function About() {
    return (
        <div className={style.main} id={'about'}>
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

/*
<div className="content mb-30">
    <h3>About Me.</h3>
    <span className="sub-title">UI / UX Designer &amp; Web Developer</span>
    <p>I am <b>Jerry Daniels</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into
        electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing</p>

    <!-- skills progress -->
    <div className="skills">
        <div className="item">
            <div className="skills-progress">
                <h6>Web Design</h6>
                <span data-value="95%" style="width: 95%;"></span>
            </div>
        </div>
        <div className="item">
            <div className="skills-progress">
                <h6>Branding</h6>
                <span data-value="80%" style="width: 80%;"></span>
            </div>
        </div>
        <div className="item">
            <div className="skills-progress">
                <h6>Development</h6>
                <span data-value="90%" style="width: 90%;"></span>
            </div>
        </div>
    </div>
    <div className="clearfix"></div>

    <a href="#0" download="">
        <span className="buton buton-bg">Download C.V</span>
    </a>
    <a href="#0" data-scroll-nav="6" className="">
        <span className="buton">Contact Me</span>
    </a>

</div>*/
