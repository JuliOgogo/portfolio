import React from 'react';
import style from './Nav.module.scss';
import {faBriefcase, faCloud, faHome, faList, faMessage} from '@fortawesome/free-solid-svg-icons';
import {LinkCreator} from './LinkCreator';

function Nav() {
    return (
        <div className={style.nav}>
            <LinkCreator to={'home'} offset={-100} icon={faHome} linkText={'Home'}/>
            <LinkCreator to={'about'} offset={-79} icon={faCloud} linkText={'About'}/>
            <LinkCreator to={'skills'} offset={-10} icon={faList} linkText={'Skills'}/>
            <LinkCreator to={'projects'} offset={-210} icon={faBriefcase} linkText={'Projects'}/>
            <LinkCreator to={'contacts'} offset={-100} icon={faMessage} linkText={'Contacts'}/>
        </div>
    );
}

export default Nav;