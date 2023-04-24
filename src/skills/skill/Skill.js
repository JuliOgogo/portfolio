import React from 'react';
import style from './Skill.module.css';

function Skill(props) {
    return (
        <div className={style.skill}>
            <h3>{props.title}</h3>
            <div className={style.icon}>
                {props.icon}
            </div>
        </div>
    );
}

export default Skill;