import React, {useState} from 'react';
import style from './Nav.module.scss';
import {faBriefcase, faCloud, faHome, faList, faMessage} from '@fortawesome/free-solid-svg-icons';
import {LinkCreator} from './LinkCreator';

function Nav() {

    // change text color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY > window.innerHeight) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? `${style.nav} ${style.scroll}` : style.nav}>
            <LinkCreator to={'home'} offset={-100} icon={faHome} linkText={'Home'} scroll={color}/>
            <LinkCreator to={'about'} offset={-79} icon={faCloud} linkText={'About'} scroll={color}/>
            <LinkCreator to={'skills'} offset={-10} icon={faList} linkText={'Skills'} scroll={color}/>
            <LinkCreator to={'projects'} offset={-210} icon={faBriefcase} linkText={'Projects'} scroll={color}/>
            <LinkCreator to={'contacts'} offset={-80} icon={faMessage} linkText={'Contacts'} scroll={color}/>
        </div>
    );
}

export default Nav;