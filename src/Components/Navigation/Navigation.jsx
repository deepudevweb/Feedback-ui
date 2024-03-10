import React, { useState } from 'react'
import './Navigation.css'
import { RxCross2 } from "react-icons/rx";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineComment } from "react-icons/ai";
import { MdOutlineEditNote } from "react-icons/md";
import { HiMiniFlag } from "react-icons/hi2";
import { MdThumbsUpDown } from "react-icons/md";
import Submit from '../Submit/Issue';
import Feedback from '../Submit/Feedback';
import Suggestions from '../Submit/Suggestions';
import Contactus from '../Submit/Contactus';

function Navigation() {
    const [open, setOpen] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [submitModel, setSubmitModel] = useState('');

    function Checkclassname() {
        if (open) {
            if (submitModel == '') {
                return 'nav-shower'
            } else {
                return 'nav-shower flex-row'
            }
        } else {
            return 'nav-items'
        }
    }

    return (
        <div className='navigation'>
            <div>
                {submitModel == 'issue' && <Submit />}
                {submitModel == 'Feedback' && <Feedback />}
                {submitModel == 'Suggestions' && <Suggestions />}
                {submitModel == 'Contact' && <Contactus />}
            </div>
            <div className={submitModel == '' ? 'nav-box' : 'nav-box flex-row'} id="nav-box">
                <div className={Checkclassname()}>
                    <span className='item-area' onClick={() => setSubmitModel('issue')}>
                        {submitModel != '' ? <></> : <p className='nav-text'>Report an issue</p>}
                        <div className='ssvg'> <HiMiniFlag className='active' style={{ scale: '1.6', color: 'black' }} /></div>
                    </span>
                    <span className='item-area' onClick={() => setSubmitModel('Feedback')}>
                        {submitModel != '' ? <></> : <p className='nav-text'>Share Feedback</p>}
                        <div className='ssvg'><MdThumbsUpDown style={{ scale: '1.6' }} /></div>
                    </span>
                    <span className='item-area' onClick={() => setSubmitModel('Suggestions')}>
                        {submitModel != '' ? <></> : <p className='nav-text'>Give Suggestions</p>}
                        <div className='ssvg'><MdOutlineEditNote style={{ scale: '1.6' }} /></div>
                    </span>
                    <span className='item-area' onClick={() => setSubmitModel('Contact')}>
                        {submitModel != '' ? <></> : <p className='nav-text'>Contact us</p>}
                        <div className='ssvg'><AiOutlineComment style={{ scale: '1.6' }} /></div>
                    </span>
                </div>
                <span className='item-area' onClick={() => setAnimation(!animation)}>
                    <div className='ssvg' onClick={() => {
                        setOpen(!open)
                        setSubmitModel('')
                    }} >{open ? <RxCross2 style={{ scale: '1.6' }} /> : <GiNotebook style={{ scale: '1.6', marginBottom: '10px' }} />}</div>
                </span>
            </div>
        </div>
    )
}

export default Navigation
