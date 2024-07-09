
import './App.css';
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Links from './Links'
import { useState, useRef ,useEffect} from 'react';
import Toggle from './Toggle'

function App() {
  const refContainer = useRef(null);
  const refCon=useRef(null);
  const [state,setState]=useState(false);
  
  const setHeight = (toggle) => {
    setState(!state);
    // console.log("asss")

  }


  useEffect(()=>{
       const K= refCon.current.getBoundingClientRect().height;
      
      console.log(K)

       if(state){
             
             refContainer.current.style.height=`${K}px`
       }
       else{
             refContainer.current.style.height=`0px`
       }

    refCon.current.style=`${K}px`      

      
  },[state])



  

  return (
    <>
      <section className='Nav'>
        <section className="logo-section">
          <section className='img'>
            <img src={logo}></img>
          </section>
          <Toggle fun={setHeight} />

        </section>

        <section ref={refContainer} className="link-section">
             <ul ref={refCon}>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>About</a></li>
                  <li><a href='/'>Products</a></li>
                  <li><a href='/'>Login</a></li>

                 </ul> 
        </section>


        <section className='media-section'>
          <a href='./' >{<FaBehance />}</a>
          <a href='./'><FaFacebook /></a>
          <a href='./'><FaLinkedin /></a>
          <a href='./'><FaTwitter /></a>

        </section>
        


      </section>


    </>
  );
}

export default App;
