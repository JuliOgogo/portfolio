import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Skills() {
    return (
        <div className={style.skills}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skillsElements}></div>
            </div>
        </div>
    );
}

export default Skills;