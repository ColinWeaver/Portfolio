import React from "react";
import { Link }  from 'react-router-dom'
import image from "./media/reservations_thumbnail.PNG";
function Projects(){
    window.scrollTo(0,0);

//------------------------------------------------------------Slide in page----------------------------------

function BodyOne(){
    return (
        <div style={{marginBottom: '300px'}}>
   <a href='http://reservations-front-end.herokuapp.com/dashboard'>  <img src={image} style={{width: '250px', float: 'left', marginRight: '10px'}}/></a>
        <div>

<p>
Summary:
This application is used to create restaurant reservations and assign/track tables for them. 
The apps functionality includes the ability to:
create reservations,
edit reservations,
create tables,
seat reservations at a table,
finish a reservation's seating at a table,
cancel a reservation, and search through reservations by phone number.
</p>

<p>
Frontend:
I developed the frontend using various React libraries and features and styled it using CSS



For the backend I used Express to develop the API. I developed the routes using JavaScript and used 
the Knex library to query the PostgreSQL database. I also used the Knex library to develop 
the seed and migration files.

Used Express to develop the API and the Knex library to 
develop the seed and migration files and to query the PostgreSQL database. 
I used ElephantSQL to host the Database. 
</p>

<p>To read more about the app such as the pages rendered and the API check out the 
 <a style={{color: 'black'}}href="https://github.com/ColinWeaver/Reservations#readme">README</a>.
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
    

       {/* <div className="paragraphs-container"> */}
        <div className="item-one">
            
            <div className="item-one-paragraph">
            
            <h3>Reservations</h3> 
            
            <BodyOne/>
            </div>
        </div>
    
    {/* </div> */}

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