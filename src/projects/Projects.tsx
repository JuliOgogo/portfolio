import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import socialNetworkImg from '../assets/images/koala.jpg';
import todoListImg from './../assets/images/birds.jpg';
import learnCardsImg from './../assets/images/road.jpg';
import componentsImg from './../assets/images/forest.jpg';
import {Fade} from 'react-awesome-reveal';

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
                <Title text={'Projects.'}/>
                <div className={style.projectsElements} id={'projects'}>
                    <Fade cascade damping={0.1} triggerOnce>
                        <Project style={socialNetworkStyle}
                                 link={socialNetworkLink}
                                 title={'Social Network'}
                                 description={'TS/REDUX/RESTAPI/THUNK/MATERIAL UI/UNIT TESTS'}/>

                        <Project style={todoListStyle}
                                 link={todoListLink}
                                 title={'Todolist'}
                                 description={'TS/REDUX/RESTAPI/THUNK/MATERIAL UI/UNIT TESTS'}/>

                        <Project style={learnCardsStyle}
                                 link={learnCardsLink}
                                 title={'Learn Cards'}
                                 description={'IT WAS A COMMAND WORK. APP FOR LEARNING SOME CARDS'}/>

                        <Project style={componentsStyle}
                                 link={componentsLink}
                                 title={'Components'}
                                 description={'REACT/TS/CSS'}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Projects;