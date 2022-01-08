import React, {useEffect, useState} from "react";
import { Link, useLocation}  from 'react-router-dom'
import image from "./media/reservations-screenshot.PNG";

function Projects({externalLinkHandler, setPosition}){
const [containerOpacity, setContainerOpacity] = useState(.2);
const [shadow, setShadow] = useState(0);
const [paddingLeft, setPaddingLeft] = useState(0);
const [paddingRight, setPaddingRight] = useState(0);
// const [display, setDisplay] = useState('none');
const [opacity, setOpacity] = useState(0);
const location = useLocation();
setPosition('fixed');

{/* -------------------------------------------------------CONFIG DEPENDING ON WHICH PAGE YOU'RE COMING FROM-------------------------------------------------------------------------------- */}
useEffect(() => {
  if (location.state){
    if (location.state.origin === 'left'){
      async function preSet(){
        await setPaddingLeft(80);
        await setOpacity(100);
      }
      preSet();
    }
  }
    else {
        setPaddingRight(100);
    }
}, [location.state])


    useEffect(() => {
        window.scrollTo(0,0);
    }, []) 


    useEffect(() => {
      if ((containerOpacity > 99) && opacity < 100){
        setOpacity(1);
      }
    }, [containerOpacity])


    //----------------------------------------------------OPACITY FADE IN AFTER SLIDE--------------------------------------------------------------------
    useEffect(() => {
      if ((opacity > 0) && opacity < 100){
        const timer = setTimeout(() => {
          async function opacitySet(){
          await setOpacity((opacity) => opacity + 25)
        }
          opacitySet();
        }, 125)
        return () => clearTimeout(timer);
      }
    }, [opacity])
//----------------------------------------------------------------PAGE SLIDE FROM RIGHT----------------------------------------------------------------------------- 
useEffect(() => {
    if (paddingLeft > 0){
    const timer = setTimeout(() => {
    async function paddingSet(){
    if ((paddingLeft > 0) && containerOpacity < 100){
    await setContainerOpacity((containerOpacity) => containerOpacity + 5)
    }
    await setPaddingLeft((padding) => padding - 1);
  }
    paddingSet();
  }, 1)
  return () => clearTimeout(timer);
    }
  }, [paddingLeft])

  {/* -------------------------------------------------------PAGE SLIDE FROM LEFT-------------------------------------------------------------------------------- */}
  useEffect(() => {
    if (paddingRight > 0){
    const timer = setTimeout(() => {
    async function paddingSet(){
    if ((paddingRight > 0) && containerOpacity < 100){
    await setContainerOpacity((containerOpacity) => containerOpacity + 4)
    }
    await setPaddingRight((padding) => padding - 1);
  }
    paddingSet();
  }, 1)
  return () => clearTimeout(timer);
    }
  }, [paddingRight])


  {/* ------------------------------------------------------SHADOW-------------------------------------------------------------------------------- */}
  useEffect(() => {
    if ((paddingLeft === 0) && paddingRight === 0){
    const timer = setTimeout(() => {
    async function shadowSet(){
    if (shadow < 15 )
    await setShadow((shadow) => shadow + .2);
  }
    shadowSet();
  }, 5)
  return () => clearTimeout(timer);
    }
  }, [paddingRight, paddingLeft, shadow])
  
  useEffect(() => {
    if (shadow === 15){
      location.state.origin = null;
    }
  }, [shadow])


{/* -------------------------------------------------------MAIN COMPONENT RENDER RETURN-------------------------------------------------------------------------------- */}

return (
    <div className="highest-page-container" style={{opacity: `${containerOpacity}%`, paddingLeft: `${paddingLeft}%`, paddingRight: `${paddingRight}%`}} >
    <h2 id="external-link" style={{textAlign: 'center', color: null}}>Projects</h2>
     <hr style={{width: '250px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
    <div style={{ width: `${90}%`, display: null, opacity: 100, bottom: '100px'}} className="about">

{/* -------------------------------------------------------ARROW LEFT-------------------------------------------------------------------------------- */}
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-left">
                <p className="arrow-left"></p>
                </div>
            </Link> 
    

{/* -------------------------------------------------------COLUMN-------------------------------------------------------------------------------- */}

            <div style={{display: 'flex', flexDirection: 'column'}}>
               
                <h3 className="page-sub-title" style={{marginLeft: '10px', opacity: `${opacity}`}}>Reservations <h5 style={{display: 'inline'}}>- <i>App that allows a restaurant to manage reservations</i></h5></h3>
              
                    <div style={{borderRadius: '9px' , padding: '10px', paddingBottom: '25px', boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`}}>

                        <div className="container-for-image" style={{textAlign: 'center'}}>
                            <a style={{width: '200px'}} href="#external-link" > 
                            <img src={image} style={{opacity: `${opacity}%`, borderRadius: '9px', boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`, margin: '10px', width: '200px'}} id='reservations' onClick={externalLinkHandler}/>
                            </a>
                        </div>
            


                <div  >
                

                    <p>
                    This application is used to create restaurant reservations and assign/track tables for them. 
                    The app's functionality includes the ability to:
                    create reservations,
                    edit reservations,
                    create tables,
                    seat reservations at a table,
                    finish a reservation's seating at a table,
                    cancel a reservation, and search through reservations by phone number.
                    </p>
                     <hr style={{width: '75%', borderTop: '1px solid grey', borderBottom: '0px'}}/>
                    <p>
                    I developed the frontend using various React libraries and features and styled it using CSS.
                    For backend I used: Express to develop the API and the Knex library to 
                    develop the seed and migration files as well as query the PostgreSQL database. 
                    I used ElephantSQL to host the Database. 
                    </p>
                    <p>Check out the
                     <i> 
                        <a style={{color: '#494949', fontWeight: 'bold'}} id="README" onClick={externalLinkHandler} href="#external-link"> README </a> 
                    </i>file to read more about the app and click the image to view the app.
                        
                     
                    </p>

                </div>

            </div>
            </div>
{/* -------------------------------------------------------ARROW RIGHT-------------------------------------------------------------------------------- */}
    
    <Link to={'/contact'} state={{origin: 'left'}} style={{ textDecoration: 'none' }}>
    <div className="arrow-container-right">
    <p className="arrow-right"></p>
    </div>
    </Link>
  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}


    </div>

   
    </div>
   
)

}

export default Projects;