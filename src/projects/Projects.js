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
    }
    const socialNetworkLink = 'https://github.com/JuliOgogo/samurai-way-main'

    const todoListStyle = {
        backgroundImage: `url(${todoListImg})`,
    }
    const todoListLink = 'https://github.com/JuliOgogo/todolist-with-dima-app-github'

    const learnCardsStyle = {
        backgroundImage: `url(${learnCardsImg})`,
    }
    const learnCardsLink = 'https://github.com/JuliOgogo/friday-project'

    const componentsStyle = {
        backgroundImage: `url(${componentsImg})`,
    }
    const componentsLink = 'https://github.com/JuliOgogo/hws2'


    return (
        <div className={style.projects}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text1={'My'} text2={'Projects'}/>
                <div className={style.projectsElements}>
                    <Project style={socialNetworkStyle}
                             link={socialNetworkLink}
                             title={'Social Network'}
                             description={'Social Network'}/>

                    <Project style={todoListStyle}
                             link={todoListLink}
                             title={'Todolist'}
                             description={'Todolist'}/>

                    <Project style={learnCardsStyle}
                             link={learnCardsLink}
                             title={'Learn Cards'}
                             description={'Learn Cards'}/>

                    <Project style={componentsStyle}
                             link={componentsLink}
                             title={'Components'}
                             description={'Components'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;