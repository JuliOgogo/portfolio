import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skills}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skillsElements}>
                    <Skill title={'HTML'} description={'Some description for HTML'}/>
                    <Skill title={'JS'} description={'Some description for JS'}/>
                    <Skill title={'React'} description={'Some description for React'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;