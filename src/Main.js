import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import About from "./About";
import {useLocation} from "react-router-dom"

function Main(){
  const [aboutWidth, setAboutWidth] = useState(0);
  const [introWidth, setIntroWidth] = useState(100);
  const [aboutDisplay, setAboutDisplay] = useState('none');
  const [introDisplay, setIntroDisplay] = useState(null);
  const [page, setPage] = useState(null);
  const [buttonDisplay, setButtonDisplay] = useState(null);
  const location = useLocation();
  const [reload, setReload] = useState(false)
  const address = location.pathname;
  
if (!page) setPage(address);
if (page === '/about'){
  if (aboutDisplay === 'none'){
  setAboutDisplay('inline');
  }
}


function viewAboutHandler(){
      setPage('/');
      setReload(true)
}

useEffect(() => {
  if (reload) {
async function reload(){
await setAboutWidth(0);
await setIntroWidth(100);
await setAboutDisplay('none');
await setIntroDisplay(null);
await setButtonDisplay(null);
await window.location.reload(true)
}
reload()
  }
}, [reload])



useEffect(() => {
  
  if ((page === '/about') && aboutWidth < 100){
 const timer = setTimeout(() => {
  async function widthSet(){
  await setIntroWidth((width) => width - 1)
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


<div style={{ width: `${aboutWidth}%`, display: `${aboutDisplay}`}} className="about">
<About viewAboutHandler={viewAboutHandler} setPage={setPage}/>
</div>

</>
)

}

export default Main;
