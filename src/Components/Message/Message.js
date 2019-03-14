import React, { Component } from 'react';
import './Message.css';

class Message extends Component {


    render() {

        const {message} = this.props.message;

        return (
            <div className="message-container">
                <p>{message.texte}</p>
                <button type="button">Like</button>
            </div>
        );
    }
}

export default Message;