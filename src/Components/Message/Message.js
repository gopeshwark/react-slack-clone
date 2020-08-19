import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

function Message({ message, timestamp, user, userImage }) {
    return (
        <div className="message">
            {userImage ? <img src={userImage} alt="" /> : <Avatar />}
            <div className="message__info">
                <h4>
                    {user} <span className="message__timestamp">{timestamp?.toDate().toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
