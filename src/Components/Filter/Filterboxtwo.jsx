import React from 'react';
import './Filter.css'
import User from '../../assets/UserLogo.png'
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import { LiaCommentDots } from "react-icons/lia";

function Filterboxtwo() {
    return (
        <div className='filterbox'>
            <div className="filter-container">
                <div className="boxtop" id='boxtop-2'>
                    <div className='tag'>
                        <img src={User} alt="" style={{ width: '35px', height: '35px', borderRadius: '50%' }} />
                        <div className='user-acc'>
                            <b><span>Neha Bhat (you)</span> </b>
                            <span>june 27, 2023</span>
                        </div>
                    </div>
                    <div className="top-logo">
                        <span><AiFillEdit style={{ scale: '1', marginRight: '8px' }} /> Edit</span>
                    </div>
                </div>
                <div className="boxcontent">
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero vel laudantium iure aliquam, eos iste, amet corrupti obcaecati fugiat veritatis voluptates beatae. Vitae unde maxime reiciendis consequatur odit asperiores alias? Natus quidem labore earum veritatis obcaecati, quas molestiae tempore dolor fugit similique nihil rerum voluptates harum? Tenetur, voluptates? Nam...<b>Read more</b></p>
                </div>
                <div className="boxbottom">
                    <div className="like">
                        <span><AiTwotoneLike style={{ scale: '1.2' }} /> Like</span>
                        <span><LiaCommentDots style={{ scale: '1.2' }} /></span>
                        <input className='comment' type="text" placeholder='Add a comment' />
                        <button className='post'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filterboxtwo
