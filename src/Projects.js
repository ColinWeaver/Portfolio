import React from "react";
import { Link }  from 'react-router-dom'
import image from "./media/reservations_thumbnail.PNG";
function Projects(){
    window.scrollTo(0,0);

//------------------------------------------------------------Slide in page----------------------------------

function BodyOne(){
    return (
        <div style={{marginBottom: '800px'}}>
   <a href='http://reservations-front-end.herokuapp.com/dashboard'>  <img src={image} style={{width: '250px', float: 'left', marginRight: '10px'}}/></a>
        <div>
     <p style={{color: null}}> 
     This app allows you to manage restaurant reservations by creating tables and reservations 
     and modifying the associations between them and the statuses of the reservations and tables. 
     After creating a reservation you can edit it, seat it at a table, and cancel it. After creating a table
     you can finish a seating if a reservation is seated at it. Each table has a status of either: 'Free' or 'Occupied'.
     Each reservation has a status of either: 'booked', 'seated', or 'finished.' There is also a search page where you can
     search through the reservations by phone number. All reservations display a 'Cancel' 
     button and depending on their status, reservations display 'Seat' 
     and 'Edit' buttons. Depending on their status, a table displays a 'Finish' button.
         
    </p>
    <p>
Frontend:
I used React to develop the app in JavaScript and used various React 
libraries and features. For styling I used CSS. There are some Boostrap classes 
left from the code I received before developing the app which I decided to leave.
From resume: 
• Developed the frontend using various React libraries and features and styled it using CSS
• Used Express to develop the API and the Knex library to develop the seed and migration files and to query the PostgreSQL database
</p>
<p>
Backend:
I used Express to develop the API. I developed the routes using JavaScript and used 
the Knex library to query the PostgreSQL database. I also used the Knex library to develop 
the seed and migration files.</p>

<p>This application is used to create restaurant reservations and assign/track tables for them. The apps functionality includes the ability to:
create reservations
edit reservations
create tables
seat reservations at a table
finish a reservation's seating at a table
cancel a reservation</p>

<p>To read more about the app such as the pages rendered and the API check out the <a href="https://github.com/ColinWeaver/Reservations#readme">README</a></p>
   
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