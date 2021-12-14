import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import About from "./About";
import {useLocation} from "react-router-dom"

function Main({reload, setReload}){
  const [opacity, setOpacity] = useState(.1);
  // const [reload, setReload] = useState(false);
  const [page, setPage] = useState(null);
  const [aboutWidth, setAboutWidth] = useState(0);
  const [introWidth, setIntroWidth] = useState(100);
  const [aboutDisplay, setAboutDisplay] = useState('none');
  const [introDisplay, setIntroDisplay] = useState(null);
  const [buttonDisplay, setButtonDisplay] = useState(null);
setReload(false);
  // const {
  //   viewAboutHandler,
  //   page, 
  //   setPage, 
  //   aboutWidth, 
  //   introWidth, 
  //   aboutDisplay, 
  //   introDisplay, 
  //   buttonDisplay, 
  //   setAboutWidth, 
  //   setAboutDisplay, 
  //   setIntroWidth, 
  //   setIntroDisplay, 
  //   setButtonDisplay
  // } = props;
  
  function viewAboutHandler(){
    setPage('/');
    setReload(true);
}

useEffect(() => {
  if (reload) {
  async function reload(){
  await setAboutWidth(aboutWidth);
  await setIntroWidth(introWidth);
  await setAboutDisplay(aboutDisplay);
  await setIntroDisplay(introDisplay);
  await setButtonDisplay(buttonDisplay);
  await window.location.reload(true);
  
  
  }
  reload()
  }
  }, [reload])
  
  
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
