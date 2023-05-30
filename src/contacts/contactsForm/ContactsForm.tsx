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
        validate: (values) => {
            const errors: FormType = {};
            if (!values.name) {
                errors.name = 'Please enter your name';
            }

            if (!values.email) {
                errors.email = 'Please enter your email';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Please enter valid email';
            }

            if (!values.message) {
                errors.message = 'Please enter your message';
            } else if (values.message.length < 2) {
                errors.message = 'Your message is too short';
            } else if (values.message.length > 1000) {
                errors.message = 'Your message is too long';
            }

            return errors;
        },
        validateOnBlur: false,
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
                    <p className={style.error}>
                        {formik.touched.name && formik.errors.name}
                    </p>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder={'Email'}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <p className={style.error}>
                        {formik.touched.email && formik.errors.email}
                    </p>
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
                    <span className={style.error}>
                        {formik.touched.message && formik.errors.message}
                    </span>
                </div>
            </Fade>
        </form>
    );
}

export default ContactsForm;