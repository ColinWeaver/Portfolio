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





function Title(){
    return <h2 style={{ color: null}}>Hi, I'm Colin.</h2>
}

function Paragraph(){
    return (
        <>
     <p style={{color: null }}> 
         I'm a web developer living in the greater Nashville area. 
         I am an idea person but also analytical which helps me in taking 
         complexity and identifying solutions through the right ideas. Let's collaborate.
    </p>
    </>
         )
}

return (
    
    <>
    <div style={{ opacity: null, width: `${100}%`, display: `${display}`}} className="about">
    <div style={{textAlign: "center", width: '100%'}}>
    <Title/>
    <p><span> I'm a web developer living in the greater Nashville area.</span></p>
      <p><span> I am an idea person... </span> <span>  but also analytical. </span></p>
      <p> <span> The more ideas generated and the more effective the filtering of them.</span></p>
    <p> <span> the faster high quality solutions can be discovered.</span></p>

     
  
    <p>Let's collaborate.</p>
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