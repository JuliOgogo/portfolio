import React from 'react';
import style from './Button.module.scss';
//@ts-ignore
import CV from '../../../assets/CV.pdf';

type ButtonPropsType = {
    theme: 'black' | 'white'
    text: string
    link: string
    download?: boolean
}

function Button(props: ButtonPropsType) {

    const finallyStyle = style.button + (props.theme === 'black' ? ' ' + style.blackButton : ' ' + style.whiteButton)

    return (
        props.download ? <a href={CV} download>
            <span className={finallyStyle}>{props.text}</span>
        </a> : <a href={props.link}>
            <span className={finallyStyle}>{props.text}</span>
        </a>
    );
}

export default Button;