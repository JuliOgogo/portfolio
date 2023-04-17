import React from 'react';
import style from './Title.module.css';

function Title(props) {
    return (
        <div className={style.title}>
            <h2>{props.text1 + ' '}<span>{props.text2}</span></h2>
        </div>
    );
}

export default Title;