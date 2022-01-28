import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Contacts from '../../components/contacts/contacts';
import Messages from '../../components/messages/messages';
import './chat.css'

export default class Chat extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row height-100'>
                    <div className='col-md-4 p-0 d-inline-block'>
                        <div className='bg-secondary py-3 px-4 text-white d-flex justify-content-between'>
                            <span>
                                Profile
                            </span>
                            <span className='btn text-white'>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </span>
                        </div>
                        <Contacts></Contacts>
                    </div>
                    <div className='col-md-8 d-inline-block rounded bg-light px-3'>
                        <div className='chat-panel'>
                            <Messages></Messages>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
