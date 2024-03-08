import React from 'react'
import './Filter.css'
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
function Filter() {
    return (
        <>
            <div className="backpath">
                <h4><IoMdArrowBack style={{ scale: '2.4', marginRight: '12px' }} />  Back to Questions</h4>
            </div>
            <div className='filter'>
                <div className="filter-upper">
                    <div className="filter-top">
                        <h3>Answer (23)</h3>
                        <div>sort by: <span className='popular'> popular <MdOutlineArrowDropDown style={{ scale: '1.6' }} /></span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
