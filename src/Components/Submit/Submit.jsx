import React from 'react'
import './Submit.css'
import DropdownItemTagsExample from './Dropdown'
import { MdAttachFile } from "react-icons/md";

function Submit() {

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className='popup' style={{ width: '300px', boxShadow: '2px 3px 1px rgba(0, 0, 0, 0.259)', borderRadius: '10px', backgroundColor: 'white !important', padding: '0 13px' }}>
      <div className="feed-top">
        <p>you are facing right now!</p>
        <p>Let us know about the <b>issue</b></p>
      </div>
      <div className="feed-dropdown">
        <DropdownItemTagsExample />
      </div>
      <div className="feed-bottom">
        <label style={{ padding: '10px' }}>Describe the issue in detail<span className="required-star">*</span></label>
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
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
      <div className='submit-button'>
        <button className="send">Submit</button>
      </div>
    </div>
  )
}

export default Submit
