import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
    theme: 'black' | 'white'
    text: string
    link: string
}

function Button(props: ButtonPropsType) {
    return (
        <a href={props.link}>
            <span className={props.theme === 'black' ? style.blackButton : style.whiteButton}>{props.text}</span>
        </a>
    );
}

export default Button;