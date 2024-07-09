import {useState} from 'react'
import { FaBars } from 'react-icons/fa';


const Toggle=(props)=>{
    const[toggle,setToggle]=useState(0);
    const handleToggle=()=>{
        props.fun(toggle);
      if(toggle==0){
        setToggle(90);
      }
      else{
        setToggle(0)
      }
      return;
    }

    return (
        <>
              
        <section className='toggle-icon'>
        <FaBars id="change" onClick={handleToggle}  style={{transform:`rotate(${toggle}deg)`}}/>
      </section>
        </>
    )
}



export default Toggle ;