import React from 'react'
import './Filter.css'
import Rocket from '../../assets/download.png'
import { IoMdEye } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Filterboxtwo from './Filterboxtwo';
import Filter from './Filter';
import Filtermid from './Filtermid';
import Navigation from '../Navigation/Navigation';

function Filterbox() {
    return (
        <>
            <div className='filterbox'>
                <div className="filter-container">
                    <div className="boxtop">
                        <div className='tag'>
                            <span className='tagspan'>Design </span>
                            <span className='tagspan'>Technology </span>
                        </div>
                        <div className="top-logo">
                            <img className='rocket' src={Rocket} alt="logo-svg" />
                            <p>Startup</p>
                        </div>
                    </div>
                    <div className="boxcontent">
                        <p className='text'>A travel startup wants Amazon to pre-install personal travel on existing Amamzon echos what is the value of the partnership to the travel startup?</p>
                        <p className='text-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet impedit repellendus autem aperiam quae delectus enim officia nulla, aspernatur in obcaecati eligendi, iste perferendis ratione facere, dolore earum error accusantium!</p>
                    </div>
                    <div className="boxbottom">
                        <div className="boxbot">
                            <p> <IoMdEye style={{ scale: '1' }} /> 100 Views</p>
                        </div>
                        <div>
                            <p> <IoIosInformationCircleOutline style={{ scale: '1' }} /> How should you word your answer?</p>
                        </div>
                    </div>
                </div>
            </div>
            <Filtermid />
            <Filterboxtwo />
            <Navigation />
        </>
    )
}

export default Filterbox
