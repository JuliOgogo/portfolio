import React from 'react';
import style from './Nav.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import {faList} from '@fortawesome/free-solid-svg-icons';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

function Nav() {
    return (
        <div className={style.nav}>
            {/*<a href={'#home'}><FontAwesomeIcon icon={faHome} className={style.icon}/>Home</a>*/}
            <Link activeClass={style.active}
                  to='home'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  isDynamic={true}
                  spyThrottle={500}
            >
                <FontAwesomeIcon icon={faHome} className={style.icon}/>Home
            </Link>

            {/*<a href={'#about'}><FontAwesomeIcon icon={faCloud} className={style.icon}/>About</a>*/}
            <Link activeClass={style.active}
                  to='about'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-79}
                  duration={500}
                  isDynamic={true}
                  spyThrottle={500}
            >
                <FontAwesomeIcon icon={faCloud} className={style.icon}/>About
            </Link>

            {/*<a href={'#skills'}><FontAwesomeIcon icon={faList} className={style.icon}/>Skills</a>*/}
            <Link activeClass={style.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-10}
                  duration={500}
                  isDynamic={true}
                  spyThrottle={500}
            >
                <FontAwesomeIcon icon={faList} className={style.icon}/>Skills
            </Link>

            {/*<a href={'#projects'}><FontAwesomeIcon icon={faBriefcase} className={style.icon}/>Projects</a>*/}
            <Link activeClass={style.active}
                  to='projects'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-210}
                  duration={500}
                  isDynamic={true}
                  spyThrottle={500}
            >
                <FontAwesomeIcon icon={faBriefcase} className={style.icon}/>Projects
            </Link>

            {/*<a href={'#contacts'}><FontAwesomeIcon icon={faMessage} className={style.icon}/>Contacts</a>*/}
            <Link activeClass={style.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-100}
                  duration={500}
                  isDynamic={true}
                  spyThrottle={500}
            >
                <FontAwesomeIcon icon={faMessage} className={style.icon}/>Contacts
            </Link>
        </div>
    );
}

export default Nav;