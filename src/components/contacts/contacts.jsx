import React, { Component, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index";
import { fetchContacts } from '../../endpoints/index';


function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [selectContactIndex, setSelectContactIndex] = useState(0);

    useEffect(async () => {
        setContacts(await fetchContacts());
    }, []);

    useEffect(() => {
        if (contacts.length > 0) {
            changeSelectedContact(contacts[0]);
        }
    }, [contacts]);

    const dispatch = useDispatch();
    const { changeSelectedContact } = bindActionCreators(actionCreators, dispatch);

    const onContactClick = (index, selectContact) => {
        setSelectContactIndex(index);
        changeSelectedContact(selectContact);
    }

    return (
        <div className="p-3">
            {
                contacts.map((contact, index) =>
                    <div className={'p-3 pointer rounded mb-3 ' + (index == selectContactIndex ? 'bg-light ' : 'shadow-sm')}
                        key={index} onClick={() => onContactClick(index, contact)}>
                        {contact.name}
                    </div>
                )
            }
        </div>
    );
}

export default Contacts;