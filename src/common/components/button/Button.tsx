import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
    theme: 'black' | 'white'
    text: string
    link: string
}

function Button(props: ButtonPropsType) {

    /*const finalClassName = s.button
        + (disabled ? ' ' + s.disabled :
            xType === 'red' ? ' ' + s.red :
                xType === 'secondary' ? ' ' + s.secondary :
                    className ? ' ' + className : ' ' + s.default)*/

    const finallyStyle = style.button + (props.theme === 'black' ? ' ' + style.blackButton : ' ' + style.whiteButton)

    return (
        <a href={props.link}>
            <span className={finallyStyle}>{props.text}</span>
        </a>
    );
}

export default Button;