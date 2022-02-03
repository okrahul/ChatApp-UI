import React, { Component } from 'react';
import './ChatBody.css';
import ChatList from '../ChatList/ChatList'
import ChatBox from '../ChatBox/ChatBox'

export default class ChatBody extends Component {
    render(){
        return(
            <>
            <div className="main_chatbody">
            <ChatList />
            <ChatBox />    
                
            </div>  
            </>
        );
    }
};
