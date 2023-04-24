import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faSass} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faJira} from '@fortawesome/free-brands-svg-icons'
import {faFigma} from '@fortawesome/free-brands-svg-icons'
import {SiRedux, SiAxios, SiTypescript, SiMaterialdesign, SiStorybook} from 'react-icons/si';

function Skills() {
    return (
        <div className={style.skills} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text1={'Skills'}/>
                <div className={style.skillsElements}>
                    <Skill title={'React'} icon={<FontAwesomeIcon icon={faReact}/>}/>
                    <Skill title={'Redux'} icon={<SiRedux/>}/>
                    <Skill title={'Axios'} icon={<SiAxios/>}/>
                    <Skill title={'JavaScript'} icon={<FontAwesomeIcon icon={faJs}/>}/>
                    <Skill title={'TypeScript'} icon={<SiTypescript/>}/>
                    <Skill title={'HTML'} icon={<FontAwesomeIcon icon={faHtml5}/>}/>
                    <Skill title={'CSS'} icon={<FontAwesomeIcon icon={faCss3}/>}/>
                    <Skill title={'SASS-SCSS'} icon={<FontAwesomeIcon icon={faSass}/>}/>
                    <Skill title={'Material UA'} icon={<SiMaterialdesign/>}/>
                    <Skill title={'Storybook'} icon={<SiStorybook/>}/>
                    <Skill title={'Unit Tests'} icon={<FontAwesomeIcon icon={faReact}/>}/>
                    <Skill title={'GIT'} icon={<FontAwesomeIcon icon={faGithub}/>}/>
                    <Skill title={'JIRA'} icon={<FontAwesomeIcon icon={faJira}/>}/>
                    <Skill title={'Figma'} icon={<FontAwesomeIcon icon={faFigma}/>}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;