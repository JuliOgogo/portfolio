import React from 'react';
import style from './Project.module.scss';
import Button from '../../common/components/button/Button';

type ProjectPropsType = {
    style: any
    link: string
    title: string
    description: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.projectImg} style={props.style}>
                <div className={style.overlay}>
                    <div className={style.projectInfo}>
                        <h3>{props.title}</h3>
                        <div className={style.description}>{props.description}</div>
                        <Button theme={'black'} text={'See on GitHub'} link={props.link}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;