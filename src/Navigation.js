import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [dashboardClass, setDashboardClass] = useState(null);
  const [searchClass, setSearchClass] = useState(null);
  const [addReservationClass, setAddReservationClass] = useState(null);
  const [addTableClass, setAddTableClass] = useState(null);
  

  //------------------------------------SETTING STATE VARIABLES FOR STYLING MENU LINKS--------------------------------------------
  useEffect(() => {
    if (location.pathname === '/dashboard'){
      setDashboardClass('clicked-menu-nav');
    }
    else if (location.pathname === '/search'){
      setSearchClass('clicked-menu-nav');
    }
    else if (location.pathname === '/reservations/new'){
      setAddReservationClass('clicked-menu-nav');
    }
    else {
      setAddTableClass('clicked-menu-nav');
    }
    
    //unsetting other list classes back to default
    if (location.pathname !== '/dashboard'){
      setDashboardClass(null);
    }
    if (location.pathname !== '/search'){
      setSearchClass(null);
    }
    if (location.pathname !== '/reservations/new'){
      setAddReservationClass(null);
    }
    if (location.pathname !== '/tables/new'){
      setAddTableClass(null);
    }
  }, [dashboardClass, searchClass, addReservationClass, addTableClass, location.pathname]);
 
 //------------------------------------MAIN COMPONENT RENDER RETURN---------------------------------------------
  return (
   <> 
    <nav >
        <ul >
          <li >
            <Link to="/">
              
              &nbsp;Home
            </Link>
          </li>

          <li >
            <Link to="/">
             
              &nbsp;About
            </Link>
          </li>
          <li>
            <Link to="/">
            
              &nbsp;Projects
            </Link>
          </li>
          
          
        </ul>
    </nav>
    </>
   
  );
}

export default Navigation;
