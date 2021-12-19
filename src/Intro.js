import React, {useState, useEffect} from "react"
import { Link, useNavigate}  from 'react-router-dom'


function Intro({opacity, setOpacity, width, setWidth, display, setDisplay, nextPageHandler }){
    window.scrollTo(0,0);
    


//------------------------------------------------------------Slide in page-----------------------------
// useEffect(() => {
//   //runs at initial render for eah page. this is for left to right. uses ocapity, width, and display
//   if (width < 100){
//  const timer = setTimeout(() => {
//   async function widthSet(){
//   if (width > 1) {
//     await setWidth(1);
//   };
//   if (width > 25){
//   await setOpacity((opacity) => opacity + .1)
//   }
//   await setWidth((width) => width + 1)
//   if (width === 1){
//  await setDisplay('none');
// }
// }
//   widthSet();
// }, 5)
// return () => clearTimeout(timer);
//   }
// }, [width])



return (
    
    <>
    <div style={{ opacity: null, width: `${100}%`, display: `${display}`}} className="about">
    <div style={{textAlign: "left", width: '100%'}}>
    <h3>Hi, I'm Colin.</h3>
    <p><span> I'm a web developer </span><span>living in the greater Nashville area.</span></p>

    <p><span>I'm well trained </span> <span> and experienced </span></p>

    <p><span>in using industry standard practices </span> <span>for full stack web development.</span></p>
  

    <p>Lets work together.</p>
    </div>

            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-right">
                    <div className='arrow'>{'>'}</div>
                </div>
            </Link>

    </div>
    </>
)





}

export default Intro;