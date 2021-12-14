import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import About from "./About";
import {useLocation} from "react-router-dom"

function Main(props){
  const [opacity, setOpacity] = useState(.1)
  const {
    viewAboutHandler,
    page, 
    setPage, 
    aboutWidth, 
    introWidth, 
    aboutDisplay, 
    introDisplay, 
    buttonDisplay, 
    setAboutWidth, 
    setAboutDisplay, 
    setIntroWidth, 
    setIntroDisplay, 
    setButtonDisplay
  } = props;
  
  
  const location = useLocation();
  const address = location.pathname;
  
if (!page) setPage(address);
if (page === '/about'){
  if (aboutDisplay === 'none'){
  setAboutDisplay('inline');
  }
}





useEffect(() => {
  
  if ((page === '/about') && aboutWidth < 100){
 const timer = setTimeout(() => {
  async function widthSet(){
  if (introWidth > 1) {
    await setIntroWidth(1);
  };
  if (aboutWidth > 25){
  await setOpacity((opacity) => opacity + .1)
  }
  await setAboutWidth((width) => width + 1)
  if (introWidth === 1){
 await setIntroDisplay('none');
 await setButtonDisplay('none');
}
  console.log(introWidth, aboutWidth, 'intro and project width')
  }
  widthSet();
}, 5)
return () => clearTimeout(timer);
  }
}, [aboutWidth, page])




 return (
<>

<div style={{ width: `${introWidth}%`, display: `${introDisplay}`}} className="intro">
<Intro setPage={setPage} buttonDisplay={buttonDisplay}/>
</div>


<div style={{ width: `${aboutWidth}%`, display: `${aboutDisplay}`, opacity: opacity}} className="about">
<About viewAboutHandler={viewAboutHandler} setPage={setPage}/>
</div>

</>
)

}

export default Main;
