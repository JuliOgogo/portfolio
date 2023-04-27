import React from 'react';
import style from './ContactsForm.module.scss';
import buttonStyle from '../../common/components/button/Button.module.scss';
import {useFormik} from 'formik';

function ContactsForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={style.contactsForm}>
            <div className={style.nameAndEmail}>
                <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder={'Name'}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder={'Email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <textarea
                id='message'
                name='message'
                placeholder={'Message'}
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <div> {/*дивка, чтобы на кнопку не применялось свойство stretch*/}
                <button type='submit' className={`${buttonStyle.button} ${buttonStyle.blackButton}`}>Submit</button>
            </div>
        </form>
    );
}

export default ContactsForm;