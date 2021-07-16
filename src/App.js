import './App.css';
import Particles from 'react-particles-js';
import Navbar from './Component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header';
function App() {
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
          type:"star" ,
          stroke:
          {
            widht:6,
            color:"green"
          }
        }
      }
    }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;
