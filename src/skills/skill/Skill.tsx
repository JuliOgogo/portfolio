import React, {ReactElement} from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    icon: ReactElement
    title: string
    description: string
}

function Skill(props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                {props.icon}
            </div>
            <h6>{props.title}</h6>
            <p>{props.description}</p>
        </div>
    );
}

export default Skill;