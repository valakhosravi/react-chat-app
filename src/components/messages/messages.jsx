import React, { useEffect, useState } from 'react';
import { fetchMessages } from '../../endpoints/index';
import './messages.css';

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(async () => {
        setMessages(await fetchMessages());
    }, []);

    console.log(messages);

    return (
        <>
            <div className='messages-container p-3'>
                <div className='msg receive rounded shadow-sm'>
                    ahdsnkjn kjnakjsddnjknajksddnj kansdkjn jk jasjkdnjkn akjsdnjkanjksdn nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    ahdsnkjn kjnakjsddnjknajksddnj kansdkjn jk jasjkdnjkn akjsdnjkanjksdn nakjsndjkn kjnkjasd
                </div>
                <div className='msg receive rounded shadow-sm'>
                    ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    aasd jklajsdkl jalskdj kljalksjkldja klajsldkj la lkasjdlkj alsd lkj ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg receive rounded shadow-sm'>
                    ahdsnkjn kjnakjsddnjknajksddnj kansdkjn jk jasjkdnjkn akjsdnjkanjksdn nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    ahdsnkjn kjnakjsddnjknajksddnj kansdkjn jk jasjkdnjkn akjsdnjkanjksdn nakjsndjkn kjnkjasd
                </div>
                <div className='msg receive rounded shadow-sm'>
                    ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    aasd jklajsdkl jalskdj kljalksjkldja klajsldkj la lkasjdlkj alsd lkj ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg receive rounded shadow-sm'>
                    ahdsnkjn kjnakjsddnjknajksddnj kansdkjn jk jasjkdnjkn akjsdnjkanjksdn nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    ahdsnkjn kjnakjsddnjknajksddnj kansdkjn jk jasjkdnjkn akjsdnjkanjksdn nakjsndjkn kjnkjasd
                </div>
                <div className='msg receive rounded shadow-sm'>
                    ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
                <div className='msg send rounded shadow-sm'>
                    aasd jklajsdkl jalskdj kljalksjkldja klajsldkj la lkasjdlkj alsd lkj ahdsnkjn  kansdkjn jk   nakjsndjkn kjnkjasd
                </div>
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
