import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Typed from 'react-typed';
import '../App.css';

const Header = () => {
    return (
        <section id="home">
        <div className="header-wraper bg-dark">
            <div className="container">
            <div className="main-info">
                <h1>I'm KWIZERA Erneste</h1>
                <Typed
                className="typed-text"
                strings={["Web developer","App developer","System Analyst","Database Expert"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a  className="btn-main-offer" href="#Contact">Contact Me</a>
                </div>
                </div>
                </div>
                </section>
    );
}

export default Header
