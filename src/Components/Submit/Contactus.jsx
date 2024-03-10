import React from 'react'
import './Submit.css'
import DropdownItemTagsExample from './Dropdown'

function Contactus() {
    return (
        <div className='submit'>
            <div className="feed-top">
                <p>for your queries!</p>
                <p>Get in <b>Conatact with us </b> with us</p>
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
                </div>
            </div>
            <div className='submit-button'>
                <button className="send">Submit</button>
            </div>
        </div>
    )
}

export default Contactus
