import React from "react";
import { Link }  from 'react-router-dom'
import image from "./media/reservations-screenshot.PNG";

function Projects(){
    window.scrollTo(0,0);

//------------------------------------------------------------Slide in page----------------------------------


return (
    <div className="highest-page-container">
    <h2 style={{textAlign: 'center', color: null}}>Projects</h2>
     <hr style={{width: '250px'}}/>
    <div style={{ width: `${100}%`, display: null, opacity: 100, bottom: '100px'}} className="about">

{/* -------------------------------------------------------ARROW LEFT-------------------------------------------------------------------------------- */}
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-left">
                        <div className='arrow'>{'<'}</div>
                </div>
            </Link> 
    

{/* -------------------------------------------------------COLUMN-------------------------------------------------------------------------------- */}

            <div style={{display: 'flex', width: '90%', flexDirection: 'column'}}>
                <h3>Reservations</h3> 
                    <div style={{marginBottom: '300px'}}>

                <a href='http://reservations-front-end.herokuapp.com/dashboard'> 
                    <div className="container-for-image" style={{border: "4px solid #494949", borderRadius: '10px', boxShadow: '5px 5px 5px grey', paddingTop: '100px', color: '#393a44', width: '220px', height: '250px', marginRight: '10px', backgroundImage: `url(${image})`, backgroundSize: '220px 350px', backgroundRepeat: 'no-repeat'}}>
                        <p style={{textAlign: 'center', marginTop: '0px', fontSize: '22px', fontWeight: '900', textShadow: '3px 3px 3px grey'}}><i>Click to View App </i></p>
                    </div>
                </a>

                <div style={{boxShadow: '10px 10px 10px grey', borderRadius: '9px' , padding: '20px', paddingBottom: '50px'}}>
                    <hr/>

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
                    <a style={{color: '#494949', fontWeight: 'bold'}} href="https://github.com/ColinWeaver/Reservations#readme"> <i>README</i> </a> file. To view the app click <a style={{color: '#494949', fontWeight: 'bold'}} href='http://reservations-front-end.herokuapp.com/dashboard'><i>here</i></a> (or click the image).
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