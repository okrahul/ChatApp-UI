import React, { Component } from 'react';
import './ChatList.css';
import { FiSearch } from "react-icons/fi";



export default class ChatList extends Component{
    render(){
        return(
            <>
            <div className="main_chatlist">
                <h2>Chat</h2>
                <div className="search_bar">
                     <input type="text" placeholder='Search' /> 
                     <button> <FiSearch className='icon' /></button>
                </div>
                

            </div>
            
            </>
        );
    }
};
