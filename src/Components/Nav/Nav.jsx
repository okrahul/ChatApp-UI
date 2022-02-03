import React, { Component } from 'react';
import './Nav.css';
import { BiCategory } from "react-icons/bi";
import { BiHomeCircle } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

export default class Nav extends Component {
    render(){
        return (
            <div className="nav">
                <div className="nav_block">
                <BiCategory className='icon'/>
                <BiHomeCircle className='icon'/>
                <BiChat className='icon' />
                <FiSettings className='icon'/>
                </div>
                <div className="nav_blocks">
                <FiLogOut className='icon'/>

                </div>
            </div>
        )
    }
}
