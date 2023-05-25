import axios from 'axios'
import {FormType} from '../contacts/contactsForm/ContactsForm';

export const instance = axios.create({
    baseURL: 'https://portfolio-backend-self.vercel.app'
})

export const contactsAPI = {
    sendMessage(values: FormType) {
        return instance.post('/sendMessage', values)
    }
}