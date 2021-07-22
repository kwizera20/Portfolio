import {React,useEffect} from 'react'
import Web from '../web-design.jpg';
import App from '../app-development.jpg';
import System from '../system-analyst.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    Aos.init({duration:2000});
    }, [])
    return (
<section data-aos="fade-top" id="Services">
  <div className="container service-wraper">
    <h1 style={{color:'white'}}>My Services</h1>
        <div className="row">
          <div className="col-md-4">
          <img src={Web}></img>
<h3>Web development</h3>
<p className="coins">I ensure both the design and development of web applications</p >
          </div>
          <div className="col-md-4">
          <img src={App}></img>
<h3>Apps development</h3>
<p className="coins">The development of native mobile apps</p >
          </div>
          <div className="col-md-4">
          <img src={System}></img>
<h3>System analysis</h3>
<p className="coins">The structure, design and implementation of systems</p >
          </div>
        </div>
        </div>
        </section>
    )
}

export default Services

