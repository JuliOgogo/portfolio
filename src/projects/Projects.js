import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.title}>
                    <h2>My <span>Projects</span></h2>
                </div>
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