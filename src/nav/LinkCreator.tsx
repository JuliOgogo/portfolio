import React from 'react';
import style from './Nav.module.scss';
import {Link} from 'react-scroll';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type LinkCreatorPropsType = {
    to: string
    offset: number
    icon: IconProp
    linkText: string
}

export function LinkCreator(props: LinkCreatorPropsType) {
    const {to, offset, icon, linkText} = props
    return (
        <Link activeClass={style.active}
              to={to}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={offset}
              duration={500}
              isDynamic={true}
              spyThrottle={500}
        >
            <FontAwesomeIcon icon={icon} className={style.icon}/>{linkText}
        </Link>
    )
}