import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className='bg-white px-4 py-3 position-sticky shadow-sm d-flex justify-content-between'>
                <b className='text-muted'>
                    Chat App
                </b>
            </div>
        );
    }
}
