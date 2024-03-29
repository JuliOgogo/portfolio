import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import ContactsForm from './contactsForm/ContactsForm';
import ContactsInfo from './contactsInfo/ContactsInfo';

function Contacts() {
    return (
        <div className={style.contacts} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <ContactsInfo/>
                <ContactsForm/>
            </div>
        </div>
    );
}

export default Contacts;