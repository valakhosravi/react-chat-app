import React, { useEffect, useState } from 'react';
import { fetchLoggedInUser, fetchMessages } from '../../endpoints/index';
import { useSelector, connect } from "react-redux";
import './messages.css';

function Messages() {
    const [messages, setMessages] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const selectedContact = useSelector((state) => {
        if (state.selectedContacts) {
            return state.selectedContacts.data;
        }
    });


    useEffect(async () => {
        setLoggedInUser(await fetchLoggedInUser());
    }, []);

    useEffect(async () => {
        if (selectedContact && loggedInUser) {
            let responseMessages = await fetchMessages({ selectedContact: selectedContact, loggedInUser });
            setMessages(responseMessages);
        }
    }, [loggedInUser, selectedContact]);

    return (
        <>
            <div className='messages-container p-3'>
                {
                    messages.map((message, index) =>
                        <div className='overflow-auto' key={index}>
                            <div className={'msg receive rounded shadow-sm ' + (loggedInUser.id == message.contactId ? 'send' : 'receive')}>
                                {message.text}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="input-container rounded-100 input-group mb-3 shadow border">
                <input type="text" className="form-control border-0 px-3 py-2" placeholder="Type a message ..." />
                <div className="input-group-append">
                    <button className="btn btn-light px-5 py-2" type="submit">
                        <b className='text-muted'>
                            Send
                        </b>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Messages;
