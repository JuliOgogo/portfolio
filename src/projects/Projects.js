import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";
import Title from "../common/components/title/Title";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text1={'My'} text2={'Projects'}/>
                <div className={style.projectsElements}>
                    <Project title={'Todolist'} description={'Todolist'}/>
                    <Project title={'Ignat'}
                             description={'Ignat Ignat Ignat Ignat Ignat Ignat Ignat Ignat Ignat Ignat'}/>
                    <Project title={'Social Network'} description={'Social Network'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;