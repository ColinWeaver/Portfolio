import React, {useState, useEffect} from "react"
import { Link, useNavigate}  from 'react-router-dom'


function Intro({opacity, setOpacity, width, setWidth, display, setDisplay, nextPageHandler }){
    // const navigate = useNavigate();
    


//------------------------------------------------------------Slide in page-----------------------------
useEffect(() => {
  //runs at initial render for eah page. this is for left to right. uses ocapity, width, and display
  if (width < 100){
 const timer = setTimeout(() => {
  async function widthSet(){
  if (width > 1) {
    await setWidth(1);
  };
  if (width > 25){
  await setOpacity((opacity) => opacity + .1)
  }
  await setWidth((width) => width + 1)
  if (width === 1){
 await setDisplay('none');
}
}
  widthSet();
}, 5)
return () => clearTimeout(timer);
  }
}, [width])





function Title(){
    return <h2 style={{ color: 'white'}}>Hi, I'm Colin.</h2>
}

function Paragraph(){
    return (
        <>
     <p style={{color: 'white' }}> 
         I'm a web developer living in the greater Nashville area. 
         I am an idea person but also analytical which helps me in taking 
         complexity and identifying solutions through the right ideas. Let's collaborate.
    </p>
    </>
         )
}

return (
    <>
    <div style={{ width: `${width}%`, display: `${display}`}} className="intro">
    <div >
    <Title/>
    <Paragraph/>
    </div>
    <div style={{display: 'flex', justifyContent: 'right'}}>
    <Link to={'/about'} style={{ textDecoration: 'none' }}>
    {/* <button ><h3 style={{display: null}}>{`>`}</h3></button> */}
    <div className='arrow'>{'>'}</div>
    </Link>
    </div>
    </div>
    </>
)





}

export default Intro;