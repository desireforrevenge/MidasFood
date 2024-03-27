import React, { useState, useEffect } from 'react';

import classes from './contacts.module.scss';

import { listData } from '../../../data/getContacts.js';

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
                <div key={index}>
                    <p className={`${classes.phone_number}`}>{contact.phone_number}</p>
                    <p className={`${classes.email}`}>{contact.email}</p>
                </div>
            ))}
        </>
    );
}
