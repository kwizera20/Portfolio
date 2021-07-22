import {React,useEffect} from 'react'
import Profile from '../kwizera.jpg'
import "bootstrap/dist/css/bootstrap.min.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
useEffect(() => {
    Aos.init({duration:2000});
}, [])
    return (
        <section data-aos="fade-left" id="About">
        <div className="about-wraper">
            <div className="container">
            <div className="row about-row">
                <div className="col-md-6 image">
<img src={Profile} alt="" className="image-profile"></img>
                </div>
                <div className="col-md-6">
                <h2 className="quote"> “Any fool can write code that a computer can understand. 
                        Good programmers write code that humans can understand.”</h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="about-paragraph">
            For the past three years i've been developing both web based applications and websites 
that gives me full comfidence that i can solve your problems
Let's all shift from being dreamers and become who we want to be
i am willing to provide assistance  to all i have to some one who are concerned 
</p>

            </div>
            </div>
        </div>
        </section>
    )
}

export default About
