import React, { useState, useEffect } from 'react';

import '../styles/contacts.scss';
import { listData } from '../data/getContacts.js';

export default function MainContacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        listData().then((response) => {
            setContacts(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
            {contacts.map((contact, index) => (
                <>
                    <p key={contact.phone_number} className='phone_number'>{contact.phone_number}</p>
                    <p key={contact.email} className='email'>{contact.email}</p>
                </>
            ))}
        </>
    );
}
