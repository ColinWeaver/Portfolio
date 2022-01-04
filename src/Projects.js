import React, {useEffect} from "react";
import { Link }  from 'react-router-dom'
import image from "./media/reservations-screenshot.PNG";

function Projects({externalLinkHandler}){
    useEffect(() => {
        window.scrollTo(0,0);
    }, []) 

//------------------------------------------------------------Slide in page----------------------------------


return (
    <div className="highest-page-container" >
    <h2 id="external-link" style={{textAlign: 'center', color: null}}>Projects</h2>
     <hr style={{width: '250px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
    <div style={{ width: `${90}%`, display: null, opacity: 100, bottom: '100px'}} className="about">

{/* -------------------------------------------------------ARROW LEFT-------------------------------------------------------------------------------- */}
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-left">
                        <div className='arrow'>{'<'}</div>
                </div>
            </Link> 
    

{/* -------------------------------------------------------COLUMN-------------------------------------------------------------------------------- */}

            <div style={{display: 'flex', flexDirection: 'column'}}>
               
                <h3 className="page-sub-title" style={{marginLeft: '10px'}}>Reservations <h5 style={{display: 'inline'}}>- <i>App that allows a restaurant to manage reservations</i></h5></h3>
              
                    <div>

                        <div className="container-for-reservations">
                            <a style={{width: '200px'}} href="#external-link" > 
                            <img src={image} style={{ borderRadius: '9px', boxShadow: '8px 8px 8px grey', margin: '10px', width: '200px'}} id='reservations' onClick={externalLinkHandler}/>
                            </a>
                        </div>
            

                <div className="box-shadow" style={{borderRadius: '9px' , padding: '10px', paddingBottom: '150px', marginBottom: '150px'}}>
                <hr style={{width: '75%', borderTop: '1px solid grey', borderBottom: '0px'}}/>

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
                    <p>
                    I developed the frontend using various React libraries and features and styled it using CSS.
                    For backend I used: Express to develop the API and the Knex library to 
                    develop the seed and migration files as well as query the PostgreSQL database. 
                    I used ElephantSQL to host the Database. 
                    </p>
                    <p>To read more about the app check out the 
                     <i> 
                        <a style={{color: '#494949', fontWeight: 'bold'}} id="README" onClick={externalLinkHandler} href="#external-link"> README </a> </i>file. 
                        To view the app click 
                        <i><a style={{color: '#494949', fontWeight: 'bold'}} id="reservations" onClick={externalLinkHandler} href='#external-link'> here </a></i>
                         (or click the image).
                     
                    </p>

                </div>

            </div>
            </div>
{/* -------------------------------------------------------ARROW RIGHT-------------------------------------------------------------------------------- */}
    
    <Link to={'/contact'} style={{ textDecoration: 'none' }}>
    <div className="arrow-container-right">
      <div className='arrow'>{'>'}</div>
    </div>
    </Link>
  {/* --------------------------------------------------------------------------------------------------------------------------------------- */}


    </div>

   
    </div>
   
)

}

export default Projects;