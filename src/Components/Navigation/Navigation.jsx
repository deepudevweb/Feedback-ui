import React from 'react'
import './Navigation.css'
import { RxCross2 } from "react-icons/rx";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import { HiMiniFlag } from "react-icons/hi2";
import { MdThumbsUpDown } from "react-icons/md";

function Navigation() {
    return (
        <div className='navigation'>
            <div className='nav-container'>
             <span className='nav-start'> <p className='nav-text'>Report an issue</p> <div> <a href="" className="navlinks"><MdThumbsUpDown style={{ scale: '1.3' }} /></a></div></span>
             <span className='nav-start'> <p className='nav-text'>Share Feedback</p> <div> <a href="" className="navlinks"><HiMiniFlag style={{ scale: '1.3' }} /></a></div></span>
             <span className='nav-start'> <p className='nav-text'>Give Suggestion</p> <div> <a href="" className="navlinks"><MdOutlineEditNote style={{ scale: '1.3' }} /></a></div></span>
             <span className='nav-start'> <p className='nav-text'>Contact us</p> <div> <a href="" className="navlinks"><AiOutlineComment style={{ scale: '1.3' }} /></a></div></span>
             <span className='nav-start'> <div> <a href="" className="navlinks"><GiNotebook style={{ scale: '1.3' }} /></a></div></span>
             <span className='nav-start'>  <div> <a href="" className="navlinks"><RxCross2 style={{ scale: '1.3' }} /></a></div></span>
            </div>
        </div>
    )
}

export default Navigation
