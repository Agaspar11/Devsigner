import React from 'react'

export default function Community() {
  return (
    <section className='community'>
        <div className="community-cont">
            <div className="left-com">
                <h1>Be a Part of a Growing <span>Community</span></h1>
                <p>Connect with peers, collaborate with ideas, and continuously learn new skills. Share your knowledge and experiences to help others grow while advancing your own journey. Together, we foster creativity, collaboration, and a shared commitment to excellence. Be part of our growth and make a lasting impact in the world of tech.</p>
                <div className="com-btn">
                    <a href="#">Join our Discord</a>
                </div>
            </div>
            <div className="right-com">
                <div className="com-blocks">
                    <h3>Join</h3>
                    <p> Experience a supportive environment where you can grow and thrive together.</p>
                </div>
                <div className="com-blocks">
                    <h3>Learn</h3>
                    <p>Enhance your skills with a wealth of resources, tutorials, and workshops. </p>
                </div>
                <div className="com-blocks">
                    <h3>Collab</h3>
                    <p>Collaborate with fellow members, exchange ideas, and learn.</p>
                </div>
                <div className="com-blocks">
                    <h3>Share</h3>
                    <p>Share your knowledge, projects, and experiences with others. </p>
                </div>
            </div>
        </div>
    </section>
  )
}
