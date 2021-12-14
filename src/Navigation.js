import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation({setReload}) {
  const location = useLocation();
  const [homeClass, setHomeClass] = useState(null);
  const [aboutClass, setAboutClass] = useState(null);
  const [projectsClass, setProjectsClass] = useState(null);
  const [contactClass, setContactClass] = useState(null);
  
function navHandler(){
  setReload(true);
}

  let address;
  if (location) address = location.pathname;
  //------------------------------------SETTING STATE VARIABLES FOR STYLING MENU LINKS--------------------------------------------
  useEffect(() => {
    if (address){
    if (address === '/'){
      setHomeClass('clicked-menu-nav');
    }
    else if (address === '/about'){
      setAboutClass('clicked-menu-nav');
    }
    else if (address === '/projects'){
      setProjectsClass('clicked-menu-nav');
    }
    else {
      setContactClass('clicked-menu-nav');
    }
    
    //unsetting other list classes back to default
    if (address !== '/'){
      setHomeClass(null);
    }
    if (address !== '/about'){
      setAboutClass(null);
    }
    if (address !== '/projects'){
      setProjectsClass(null);
    }
    if (address !== '/contact'){
      setContactClass(null);
    }
  }
  }, [homeClass, aboutClass, projectsClass, contactClass, address]);
 
 //------------------------------------MAIN COMPONENT RENDER RETURN---------------------------------------------
  return (
   <> 
    <nav >
        <ul >
          <li onClick={navHandler} className={homeClass}>
            <Link to="/">
              &nbsp;Home
            </Link>
          </li>

          <li onClick={navHandler} className={aboutClass}>
            <Link to="/about">
              &nbsp;About
            </Link>
          </li>
          <li onClick={navHandler} className={projectsClass}>
            <Link to="/projects">
              &nbsp;Projects
            </Link>
          </li>
          <li onClick={navHandler} className={contactClass}>
            <Link to="/contact">
              &nbsp;Contact
            </Link>
          </li>
          
          
        </ul>
    </nav>
    </>
   
  );
}

export default Navigation;
