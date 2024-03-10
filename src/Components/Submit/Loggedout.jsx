import React from 'react'
import './Submit.css'

function Loggedout() {
  return (
    <div className='submit'>
      <div className="feed-top" style={{ padding: '15px' }}>
        <p>queries!</p>
        <p>Get in <b>Contact with us</b> for your</p>
      </div>
      <form className="feed-dropdown">
        <label style={{ padding: '10px 0px' }} htmlFor="name">Your name <span className="required-star">*</span></label>
        <input type="text" id="name" />
        <label style={{ padding: '10px 0px' }} htmlFor="email">Your email</label>
        <input type="email" id="email" />
        <label style={{ padding: '10px 0px' }} htmlFor="name">Your mobile number<span className="required-star">*</span></label>
        <input type="name" id="name" />
      </form>
      <div className="feed-bottom">
        <label style={{ padding: '10px 0px' }}>What whould you like to ask?<span className="required-star">*</span></label>
        <div className="feedback-container">
          <div className="textarea-container">
            <textarea className="feedback-input" id='arealogout' placeholder="Write here..."></textarea>
          </div>
        </div>
      </div>
      <div className='submit-button'>
        <button className="send">Submit</button>
      </div>
    </div>
  )
}

export default Loggedout
