import React from 'react';
import style from './Nav.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import {faList} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className={style.nav}>
            <a href={'#home'}><FontAwesomeIcon icon={faHome} className={style.icon}/>Home</a>
            <a href={'#about'}><FontAwesomeIcon icon={faCloud} className={style.icon}/>About</a>
            <a href={'#skills'}><FontAwesomeIcon icon={faList} className={style.icon}/>Skills</a>
            <a href={'#projects'}><FontAwesomeIcon icon={faBriefcase} className={style.icon}/>Projects</a>
            <a href={'#contacts'}><FontAwesomeIcon icon={faMessage} className={style.icon}/>Contacts</a>
        </div>
    );
}

export default Nav;