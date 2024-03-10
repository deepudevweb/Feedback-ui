import React from 'react'
import './Submit.css'
import DropdownItemTagsExample from './Dropdown'
import { MdAttachFile } from "react-icons/md";

function Suggestions() {
    return (
        <div className='popup'>
            <div className="feed-top">
                <p>for a chance to earn rewards!</p>
                <p>Shere you <b>Suggestions</b> with us</p>
            </div>
            <div className="feed-dropdown">
                <DropdownItemTagsExample />
            </div>
            <div className="feed-bottom">
                <label style={{ padding: '10px' }}>Describe the Suggestions in detail<span className="required-star">*</span></label>
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
            <div className='submit-button'>
                <button className="send">Submit</button>
            </div>
        </div>
    )
}

export default Suggestions
