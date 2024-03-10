import React from 'react'
import './Header.css'
import { GoChevronDown } from "react-icons/go";
import User from '../../assets/UserLogo.png'


function Header() {
    return (
        <div className='header'>
            <div className='head-container'>
                <h3>THE <span style={{ backgroundColor: '#E9E9E9', color: 'black' }}>PRODUCT</span> PLATFORM</h3>
            </div>
            <div className='profile'>
                <a href="#">Learn<GoChevronDown style={{ scale: '1.6' }} /></a>
                <a href="#">Practice<GoChevronDown style={{ scale: '1.6' }} /> </a>
                <img className='profile-img' src={User} alt="profile" />
            </div>
        </div>
    )
}

export default Header
