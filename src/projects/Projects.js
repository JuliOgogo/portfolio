import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialNetworkImg from './../assets/images/koala2.jpg';
import todoListImg from './../assets/images/birds.jpg';
import learnCardsImg from './../assets/images/road.jpg';
import componentsImg from './../assets/images/forest.jpg';

function Projects() {

    const socialNetworkStyle = {
        backgroundImage: `url(${socialNetworkImg})`,
    };

    const todoListStyle = {
        backgroundImage: `url(${todoListImg})`,
    };

    const learnCardsStyle = {
        backgroundImage: `url(${learnCardsImg})`,
    };

    const componentsStyle = {
        backgroundImage: `url(${componentsImg})`,
    };

    return (
        <div className={style.projects}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text1={'My'} text2={'Projects'}/>
                <div className={style.projectsElements}>
                    <Project style={socialNetworkStyle} title={'Social Network'} description={'Social Network'}/>
                    <Project style={todoListStyle} title={'Todolist'} description={'Todolist'}/>
                    <Project style={learnCardsStyle} title={'Learn Cards'}
                             description={'Learn Cards'}/>
                    <Project style={componentsStyle} title={'Components'}
                             description={'Components'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;