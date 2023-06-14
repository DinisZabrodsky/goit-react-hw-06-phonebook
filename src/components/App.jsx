import { useState } from "react";
import { nanoid } from 'nanoid';
import {ContactForm} from "./ContactForm/ContactForm";
import { FilterEl } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector } from 'react-redux'

import cssPhone from "./Phonebook.module.css";
import { addContactsReducer, deleteContactsReducer, addFilterReducer } from "store/phonebook/phonebookReducer";

export function App () {

    const dispatch = useDispatch()
    const {filter, contacts} = useSelector((state) => state.phonebok)

    const [first, setFirst] = useState(true)

    const addContact = (e) => {
        e.preventDefault()
        const newContact = {
            id: 'id-' + nanoid(5),
            name: e.target.name.value,
            number: e.target.number.value,
        }

        if(contacts.find(contact => contact.name === e.target.name.value)) {
            alert(`${newContact.name} is already in contacts.`)
            return
        }


        dispatch(addContactsReducer(newContact))

        setFirst(false)

        e.currentTarget.reset();
    }

    const onFilter = ({target: {value}}) => {
        dispatch(addFilterReducer(value))
    }

    const getContacts = () => {
        if(filter !== "" ) {
            return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        }
        
    }

    const deleteContact = (e) => {
        if(first) {
            setFirst(false)
        }

        const id = e.target.dataset.id
        dispatch(deleteContactsReducer(id))
    }


    return (
        <div className={cssPhone.conteiner}>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact}/>

            <h2>Contacts</h2>
            <FilterEl onFilter={onFilter} filterValue={filter} />

            <ul>
                {contacts.length !== 0 ? 
                <ContactList contacts={contacts} filterValue={filter} getContacts={getContacts()} deleteContact={deleteContact}/>:
                <li><p>Список контактів пустий</p></li>}
            </ul>
    </div>
    )
}
