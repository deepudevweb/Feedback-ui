import React from 'react'
import './Filter.css'
import { MdOutlineArrowDropDown } from "react-icons/md";

function Filtermid() {
  return (
    <div className='filter'>
      <div className="filter-upper">
        <div className="filter-top">
          <h3>Answer (23)</h3>
          <div>sort by: <span className='popular'> popular <MdOutlineArrowDropDown style={{ scale: '1.6' }} /></span></div>
        </div>
      </div>
    </div>
  )
}

export default Filtermid
