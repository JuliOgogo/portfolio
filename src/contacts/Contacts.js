import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="#">
                    <input/>
                    <input/>
                    <textarea/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default Contacts;