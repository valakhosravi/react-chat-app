import React, { Component, useEffect, useState } from 'react';

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [selectContactIndex, setSelectContactIndex] = useState(0);

    useEffect(async () => {
        const url = 'http://localhost:3000/contacts';
        const response = await fetch(url);
        const decodeResponse = await response.json()
        console.log(decodeResponse);
        setContacts(decodeResponse);
    }, []);

    return (
        <div className="p-3">
            {
                contacts.map((contact, index) =>
                    <div className={'p-3 pointer rounded mb-3 ' + (index == selectContactIndex ? 'bg-light ' : 'shadow-sm')}>
                        {contact.name}
                    </div>
                )
            }
        </div>
    );
}
