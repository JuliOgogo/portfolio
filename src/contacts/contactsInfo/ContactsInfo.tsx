import React from 'react';
import style from './ContactsInfo.module.scss';
import {FiMapPin} from 'react-icons/fi';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {AiOutlinePhone} from 'react-icons/ai';
import {InfoItem} from './InfoItem/InfoItem';
import {Fade} from 'react-awesome-reveal';

function ContactsInfo() {
    return (
        <div className={style.contactsInfo}>
            <Fade cascade damping={0.1} triggerOnce>
                <InfoItem icon={<FiMapPin/>} title={'Address'} text={'Moscow, Russia'}/>
                <InfoItem icon={<MdOutlineAlternateEmail/>} title={'Email'} text={'juli.ogogo@yandex.ru'}/>
                <InfoItem icon={<AiOutlinePhone/>} title={'Phone'} text={'+7 991 985 75 07'}/>
            </Fade>
        </div>
    );
}

export default ContactsInfo;