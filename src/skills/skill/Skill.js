import React from 'react';
import style from './Skill.module.scss';

function Skill(props) {
    return (
        <div className={style.skill}>
            <div>{props.title}</div>
            <div className={style.icon}>
                {props.icon}
            </div>
        </div>
    );
}

export default Skill;