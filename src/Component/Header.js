import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>I'm KWIZERA Erneste</h1>
                <Typed
                className="typed-text"
                strings={["Web developer","App developer","System Analyst","Database Expert"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a  className="btn-main-offer" href="">Contact Me</a>
                </div>
                </div>
    );
}

export default Header
