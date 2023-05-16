import React from 'react';
import style from './LinkCreator.module.scss';
import {Link} from 'react-scroll';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type LinkCreatorPropsType = {
    to: string
    offset: number
    icon: IconProp
    linkText: string
    scroll: boolean
}

export function LinkCreator(props: LinkCreatorPropsType) {
    const {to, offset, icon, linkText, scroll} = props
    return (
        <Link activeClass={scroll ? `${style.active} ${style.scroll}` : style.active}
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