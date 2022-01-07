import React, {useEffect, useState} from "react";
import { Link, useLocation}  from 'react-router-dom'

function Contact({externalLinkHandler, setPosition}){
const [containerOpacity, setContainerOpacity] = useState(.2);
const [shadow, setShadow] = useState(0);
const [paddingLeft, setPaddingLeft] = useState(0);
const [paddingRight, setPaddingRight] = useState(0);
const location = useLocation();
setPosition('fixed');


    useEffect(() => {
      window.scrollTo(0,0);
  }, []) 

 
  useEffect(() => {
    if (location.state){
      if (location.state.origin === 'left'){
          setPaddingLeft(80);
      }
    }
      else {
          setPaddingRight(100);
      }
  }, [location.state])
  

  //----------------------------------------------------------------PAGE SLIDE------------------------------------------------------------------------------ 
//page slide from left
useEffect(() => {
  if (paddingLeft > 0){
  const timer = setTimeout(() => {
  async function paddingSet(){
  if ((paddingLeft > 0) && containerOpacity < 100){
  await setContainerOpacity((containerOpacity) => containerOpacity + 5)
  }
  await setPaddingLeft((padding) => padding - 1);
}
  paddingSet();
}, 1)
return () => clearTimeout(timer);
  }
}, [paddingLeft])

//page slide from right
useEffect(() => {
  if (paddingRight > 0){
  const timer = setTimeout(() => {
  async function paddingSet(){
  if ((paddingRight > 0) && containerOpacity < 100){
  await setContainerOpacity((containerOpacity) => containerOpacity + 4)
  }
  await setPaddingRight((padding) => padding - 1);
}
  paddingSet();
}, 1)
return () => clearTimeout(timer);
  }
}, [paddingRight])


//for shadow
useEffect(() => {
  if ((paddingLeft === 0) && paddingRight === 0){
  const timer = setTimeout(() => {
  async function shadowSet(){
  if (shadow < 15 )
  await setShadow((shadow) => shadow + .2);
}
  shadowSet();
}, 5)
return () => clearTimeout(timer);
  }
}, [paddingRight, paddingLeft, shadow])

useEffect(() => {
  if (shadow === 15){
    location.state.origin = null;
  }
}, [shadow])
  

 
 //---------------------------------------------------------------------------MAIN COMPONENT RENDER RETURN--------------------------------------------------------------------------------
    

    return (
        <>
          <div style={{opacity: `${containerOpacity}%`, paddingLeft: `${paddingLeft}%`, paddingRight: `${paddingRight}%`, marginBottom: '300px'}} >

        <div id="external-link" style={{textAlign: 'center', width: '100%', color: null, backgroundColor: '#E0E0E0', paddingBottom: '0px', paddingTop: '1px'}}>
        <h2>Contact Me</h2>
        <hr style={{width: '250px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
        </div>
     

        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
        <div className="arrow-container-left">
            <p className="arrow-left"></p>
        </div>
        </Link> 


               <div className="href-container-container" style={{boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`}}>
               <div className="contact-href-container" style={{boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`}}>
               
               <p style={{marginLeft: '0px'}}>
                <i>
                  <a href="#external-link" id="GitHub" onClick={externalLinkHandler}>
                    GitHub
                 </a>
                </i>
               </p>

  
               <p style={{marginLeft: '0px'}}>
                <i>
                 <a href="#external-link" id="LinkedIn" onClick={externalLinkHandler}>
                  LinkedIn
                 </a>
               </i>
              </p>
                
        
               <p style={{marginLeft: '0px'}}>
                 <i>
                 <a href="tel:6154385452">
                  615-438-5452
                 </a>
                 </i>
              </p>
              

             
               <p style={{marginLeft: '0px'}}>
                 <i>
               <a href="mailto:composerman11@gmail.com">
                 Composerman11@gmail.com
               </a>
               </i>
               </p>

             
               </div>


               </div>
              
        </div>

        
        </>
    )
}

export default Contact;