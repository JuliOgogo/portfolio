import React from 'react';
import style from './Skill.module.scss';

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {props.icon}
            </div>
            <h6>{props.title}</h6>
            <p>{props.descripton}</p>
        </div>
    );
}

export default Skill;