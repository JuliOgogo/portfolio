import axios from 'axios'
import {FormType} from '../contacts/contactsForm/ContactsForm';

export const instance = axios.create({
    baseURL: 'http://localhost:3010'
})

export const contactsAPI = {
    sendMessage(values: FormType) {
        return instance.post('/sendMessage', values)
    }
}