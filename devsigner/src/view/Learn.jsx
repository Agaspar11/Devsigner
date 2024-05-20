import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Learn() {
  return (
    <section className='learn'>
        <div className="learn-cont">
            <div className="upper-learn">
                <small>Learn</small>
                <h2>Expand and Share Your Knowledge with Us</h2>
                <p>Explore our wide range of video and learning resources, you can also be a contributor here.</p>
                <div className="learn-mainvid">
                    <div className="learn-vids">
                        <div className="learnvid">
                            <img src="" alt="" srcset="" />
                            <div className="type-minutes">
                                <p>Research</p>
                                <p>20 mins video</p>
                            </div>
                            <h3>Mastering UX Design Principles</h3>
                            <p>Learn the essential principles of UX design and create impactful user experiences.</p>
                            <a href="#">Learn now <MdOutlineKeyboardArrowRight /></a> 
                        </div>
                    </div>
                    <div className="learn-vids">
                        <div className="learnvid">
                            <img src="" alt="" srcset="" />
                            <div className="type-minutes">
                                <p>Research</p>
                                <p>20 mins video</p>
                            </div>
                            <h3>Mastering UX Design Principles</h3>
                            <p>Learn the essential principles of UX design and create impactful user experiences.</p>
                            <a href="#">Learn now <MdOutlineKeyboardArrowRight /></a> 
                        </div>
                    </div>
                    <div className="learn-vids">
                        <div className="learnvid">
                            <img src="" alt="" srcset="" />
                            <div className="type-minutes">
                                <p>Research</p>
                                <p>20 mins video</p>
                            </div>
                            <h3>Mastering UX Design Principles</h3>
                            <p>Learn the essential principles of UX design and create impactful user experiences.</p>
                            <a href="#">Learn now <MdOutlineKeyboardArrowRight /></a> 
                        </div>
                    </div>
                    <div className="learn-viewall">
                        <a href="#">View all</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
