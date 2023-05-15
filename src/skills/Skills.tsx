import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import {HiOutlineComputerDesktop} from 'react-icons/hi2';
import {IoCheckboxOutline, IoColorPaletteOutline} from 'react-icons/io5';
import {MdOutlineTagFaces} from 'react-icons/md';
import {Fade} from 'react-awesome-reveal';

function Skills() {
    return (
        <div className={style.skills} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills.'}/>
                <div className={style.skillsElements}>
                    <Fade cascade damping={0.1} triggerOnce>
                        <Skill icon={<HiOutlineComputerDesktop/>}
                               title={'Web Development'}
                               description={'JavaScript, TypeScript, React, Redux, Axios'}/>
                        <Skill icon={<IoColorPaletteOutline/>}
                               title={'Web Design'}
                               description={'HTML, CSS, SASS-SCSS, Material UI'}/>
                        <Skill icon={<IoCheckboxOutline/>}
                               title={'Testing'}
                               description={'Unit Tests, StoryBook, SnapShot'}/>
                        <Skill icon={<MdOutlineTagFaces/>}
                               title={'Helpful skills'}
                               description={'Git, Jira, Figma'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Skills;