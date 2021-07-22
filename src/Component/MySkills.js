import {React,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MySkills = () => {
useEffect(() => {
Aos.init({duration:2000});
}, [])
  return (
    <section data-aos="fade-right" id="MySkills">
    <div className="myskills-wraper bg-dark">
      <div className="container">
    <h1 className="text-center" style={{color:'white',padding:50}}>About my Expertise</h1>
    <div className="row progressbar-new">
        <div className=" col-md-6 progressBar">
        <label style={{color:'white'}}> Programming Knowledge</label>
        <div className="framework" style={{color:'white'}}>
        <label>HTML</label>
          <progress value="98" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
        <label>CSS</label>
          <progress value="98" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
        <label>JavaScript</label>
          <progress value="90" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
        <label>Java</label>
          <progress value="75" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
        <label>PHP</label>
          <progress value="70" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
        <label>Python</label>
          <progress value="66" max="100"> 99</progress>
        </div>

  </div>
  <div className="col-md-6 progressBar">
        <label style={{color:'orange'}}>Other Technologies</label>
        <div className="framework" style={{color:'white'}}>
          <label>Reactjs</label>
          <progress value="90" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
          <label>React Native</label>
          <progress value="88" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
          <label>Firebase</label>
          <progress value="80" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
          <label>Git</label>
          <progress value="89" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
          <label>Bootstrap</label>
          <progress value="90" max="100"> 99</progress>
        </div>
        <div className="framework" style={{color:'white'}}>
          <label>Tailwind</label>
          <progress value="80" max="100"> 99</progress>
        </div>
    </div>
  </div>
  </div>
  </div>
      </section>
  );
}


export default MySkills

