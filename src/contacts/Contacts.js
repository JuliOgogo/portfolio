import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm} action="#">
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <a className={style.contactsA} href={'#'}>Submit</a>
            </div>
        </div>
    );
}

export default Contacts;