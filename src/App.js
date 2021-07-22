import './App.css';
import Particles from 'react-particles-js';
import Navbar from './Component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header';
import About from './Component/About';
import Skills from './Component/MySkills';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App()  {
 
  return (
    <>
    <Particles
    params={{
      Particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circular" ,
          stroke:
          {
            widht:6,
            color:"green"
          }
        }
      }
    }}
    />
    <Navbar  />
    <Header data-aos="fade-left"/>
    <About />
    <Skills />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
