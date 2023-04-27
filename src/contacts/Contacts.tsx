import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import Button from '../common/components/button/Button';

function Contacts() {
    return (
        <div className={style.contacts} id={'contacts'}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts.'}/>
                <form className={style.contactsForm} action="#">
                    <input/>
                    <input/>
                    <textarea/>
                    <Button theme={'black'} text={'Submit'} link={'#'}/>
                </form>
            </div>
        </div>
    );
}

export default Contacts;