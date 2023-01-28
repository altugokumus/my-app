import { useState, useEffect } from 'react';

import {} from "./styles.css"

import List from './List';

import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName: "Altuğ",
            PhoneNumber: "05452147896"
        },
        {
            fullName: "Mehmet",
            PhoneNumber: "05412369874"
        }
    ]);

    useEffect(()=> {
    console.log(contacts);
    }, [contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;