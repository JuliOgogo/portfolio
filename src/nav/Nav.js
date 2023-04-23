import React from 'react';
import style from './Nav.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faList} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className={style.nav}>
            <a href={'#'}><FontAwesomeIcon icon={faHome} className={style.icon}/>Home</a>
            <a href={'#'}><FontAwesomeIcon icon={faList} className={style.icon}/>Skills</a>
            <a href={'#'}><FontAwesomeIcon icon={faBriefcase} className={style.icon}/>Projects</a>
            <a href={'#'}><FontAwesomeIcon icon={faMessage} className={style.icon}/>Contacts</a>
        </div>
    );
}

export default Nav;