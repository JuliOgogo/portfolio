import React from 'react';
import style from './ContactsForm.module.scss';
import {useFormik} from 'formik';
import {Fade} from 'react-awesome-reveal';
import {contactsAPI} from '../../api/api';

export type FormType = {
    name?: string
    email?: string
    message?: string
}

function ContactsForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            contactsAPI.sendMessage(values).then(() => alert('Your message has been sent'))
                .catch(() => alert('Something went wrong'))
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={style.contactsForm}>
            <Fade cascade damping={0.1} triggerOnce>
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
                    <button type='submit'>Send</button>
                </div>
            </Fade>
        </form>
    );
}

export default ContactsForm;