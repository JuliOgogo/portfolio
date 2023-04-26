import React from 'react';
import style from './Title.module.scss';

function Title(props) {
    return (
        <div className={style.title}>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Title;