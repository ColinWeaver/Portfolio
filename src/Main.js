import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import {useLocation} from "react-router-dom"

function Main(){
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [introWidth, setIntroWidth] = useState(100);
  const [projectsDisplay, setProjectsDisplay] = useState('none');
  const [introDisplay, setIntroDisplay] = useState(null);
  const [page, setPage] = useState(null);
  const [buttonDisplay, setButtonDisplay] = useState(null);
  const location = useLocation();
  const [reload, setReload] = useState(false)
  const address = location.pathname;
  
if (!page) setPage(address);
if (page === '/projects'){
  if (projectsDisplay === 'none'){
  setProjectsDisplay('inline');
  }
}


function viewProjectsHandler(){
      setPage('/');
      setReload(true)
}

useEffect(() => {
  if (reload) {
async function reload(){
await setProjectsWidth(0);
await setIntroWidth(100);
await setProjectsDisplay('none');
await setIntroDisplay(null);
await setButtonDisplay(null);
await window.location.reload(true)
}
reload()
  }
}, [reload])



useEffect(() => {
  
  if ((page === '/projects') && projectsWidth < 100){
 const timer = setTimeout(() => {
  async function widthSet(){
  await setIntroWidth((width) => width - 1)
  await setProjectsWidth((width) => width + 1)
  if (introWidth === 1){
 await setIntroDisplay('none');
 await setButtonDisplay('none');
}
  console.log(introWidth, projectsWidth, 'intro and project width')
  }
  widthSet();
}, 1)
return () => clearTimeout(timer);
  }
}, [projectsWidth, page])


 return (
<>
<div style={{ width: `${introWidth}%`, display: `${introDisplay}`}} className="intro">
<Intro setPage={setPage} buttonDisplay={buttonDisplay}/>
</div>


<div style={{ width: `${projectsWidth}%`, display: `${projectsDisplay}`}} className="projects">
<Projects viewProjectsHandler={viewProjectsHandler} setPage={setPage}/>
</div>
</>
)

}

export default Main;
