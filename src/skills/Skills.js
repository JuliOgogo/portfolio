import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'

function Skills() {
    return (
        <div className={style.skills} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills.'}/>
                <div className={style.skillsElements}>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>}
                           title={'Web Development'}
                           descripton={'JavaScript, TypeScript, React, Redux, Axios'}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>}
                           title={'Web Design'}
                           descripton={'HTML, CSS, SASS-SCSS, Material UI'}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>}
                           title={'Testing'}
                           descripton={'Unit Tests, StoryBook, SnapShot'}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>}
                           title={'Other'}
                           descripton={'Git, Jira, Figma'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;