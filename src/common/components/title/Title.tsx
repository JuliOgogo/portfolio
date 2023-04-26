import React from 'react';
import style from './Title.module.scss';

type TitlePropsType = {
    text: string
}

function Title(props: TitlePropsType) {
    return (
        <div className={style.title}>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Title;