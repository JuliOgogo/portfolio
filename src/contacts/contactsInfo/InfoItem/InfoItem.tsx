import React, {ReactElement} from 'react';
import style from './InfoItem.module.scss';

type InfoItemPropsType = {
    icon: ReactElement
    title: string
    text: string
}

export function InfoItem(props: InfoItemPropsType) {
    return (
        <div className={style.infoItem}>
            <div className={style.icon}>
                {props.icon}
            </div>
            <div className={style.titleAndText}>
                <h6>{props.title}</h6>
                <p>{props.text}</p>
            </div>
        </div>
    );
}