import React, {useEffect, useState } from "react";
import Intro from "./Intro";
import Projects from "./Projects";
import {useLocation} from "react-router-dom"

function Main(){
  const [projectsWidth, setProjectsWidth] = useState(0);
  const [introWidth, setIntroWidth] = useState(100);
  const [projectsFontSize, setProjectsFontSize] = useState(null);
  const [introFontSize, setIntroFontSize] = useState(null);
  const [page, setPage] = useState(null);
  const location = useLocation();
  const address = location.pathname;
if (!page) setPage(address);



// if ((page ==='/projects') &&  ) {
//   setProjectsFontSize(null)
// }




useEffect(() => {
  
  if ((page === '/projects') && projectsWidth < 100){
 const timer = setTimeout(() => {
  async function widthSet(){
  await setIntroWidth((width) => width - 1)
  await setProjectsWidth((width) => width + 1)
  if (introWidth === 1){
 await setIntroFontSize(0);
}
  console.log(introWidth, projectsWidth, 'intro and project width')
  }
  widthSet();
}, 15)
return () => clearTimeout(timer);
  }
}, [projectsWidth, page])


 return (
<>
<div style={{ width: `${introWidth}%`, fontSize: introFontSize }} className="intro">
<Intro setPage={setPage}/>
</div>


<div style={{ width: `${projectsWidth}%`, fontSize: projectsFontSize}} className="projects">
<Projects/>
</div>
</>
)

}

export default Main;
