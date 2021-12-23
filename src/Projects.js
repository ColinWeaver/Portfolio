import React from "react";
import { Link }  from 'react-router-dom'
import image from "./media/reservations_thumbnail.PNG";
function Projects(){
    window.scrollTo(0,0);

//------------------------------------------------------------Slide in page----------------------------------

function BodyOne(){
    return (
        <div style={{marginBottom: '300px'}}>

<a href='http://reservations-front-end.herokuapp.com/dashboard'> 
<div className="container-for-image" style={{paddingTop: '100px', color: '#393a44', width: '250px', height: '150px', marginRight: '10px', backgroundImage: `url(${image})`, backgroundSize: '250px 250px', backgroundRepeat: 'no-repeat'}}>
    <p style={{textAlign: 'center', marginTop: '0px', fontSize: '25px', fontWeight: '900', textShadow: '2px 2px 2px grey'}}>Click to View App </p>
</div></a>
 <div>
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
 <a style={{color: 'black', fontWeight: 'bold'}} href="https://github.com/ColinWeaver/Reservations#readme"> README </a> file. To view the app click <a style={{color: 'black', fontWeight: 'bold'}} href='http://reservations-front-end.herokuapp.com/dashboard'>here</a> (or click the image).
</p>


   
    </div>
    </div>
         )
}



return (
    <>
    <h2 style={{textAlign: 'center', color: null}}>Projects</h2>
    <div style={{ width: `${100}%`, display: null, opacity: 100, bottom: '100px'}} className="about">


       
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
            <div className="arrow-container-left">
                    <div className='arrow'>{'<'}</div>
                </div>
            </Link> 
    


        <div className="item-one">
            
            <div className="item-one-paragraph">
            
            <h3>Reservations</h3> 
            
            <BodyOne/>
            </div>
        </div>
    
 

    <Link to={'/contact'} style={{ textDecoration: 'none' }}>
    <div className="arrow-container-right">
      <div className='arrow'>{'>'}</div>
    </div>
    </Link>
  


    </div>
    
    </>
)

}

export default Projects;