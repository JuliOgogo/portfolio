import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projects}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projectsElements}>
                    <Project title={'Todolist'} description={'Todolist'}/>
                    <Project title={'Ignat'} description={'Ignat'}/>
                    <Project title={'Social Network'} description={'Social Network'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;