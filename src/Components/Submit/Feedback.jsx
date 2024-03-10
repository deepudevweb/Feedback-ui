import React from 'react'
import './Submit.css'
import DropdownItemTagsExample from './Dropdown'
import { MdAttachFile } from "react-icons/md";

function Feedback() {
  return (
    <div className='popup'>
      <div className="feed-top">
      <p>about us!</p>
        <p>Let us know your <b>feedback</b></p>
      </div>
      <div className="feed-bottom">
        <div className="feedback-container">
          <div className="textarea-container">
            <textarea className="feedback-input" placeholder="Write here..."></textarea>
          </div>
          <label htmlFor="fileInput" className="file-label">
            <MdAttachFile /> Attach File
            <input
              type="file"
              id="fileInput"
              className="file-input"
            />
          </label>
        </div>
      </div>
      <p style={{fontSize: '13px'}}><input type="checkbox" className="switchbox" style={{marginRight: '5px'}}/>Send feedback anonymously</p>
      <div className='submit-button'>
        <button className="send">Submit</button>
      </div>
    </div>
  )
}

export default Feedback
