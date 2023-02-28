import React from 'react';
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a href={'#'}>Show</a>
            </div>
            <h3>{props.title}</h3>
            <div className={style.description}>{props.description}</div>
        </div>
    );
}

export default Project;