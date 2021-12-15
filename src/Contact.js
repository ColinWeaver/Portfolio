import React from "react";
import { Link}  from 'react-router-dom'

function Contact(){
    
    function TitleOne(){
        return <h2 style={{ color: 'white'}}>Project</h2>
    }
    
    function BodyOne(){
        return (
            <>
         <p style={{color: 'white' }}> 
             I'm a web developer living in the greater Nashville area. 
             I am an idea person but also analytical which helps me in taking 
             complexity and identifying solutions through the right ideas. Let's collaborate.
        </p>
        </>
             )
    }
    
    function TitleTwo(){
        return <h2 style={{ color: 'white'}}>Movies</h2>
    }
    
    function BodyTwo(){
        return (
            <>
         <p style={{color: 'white' }}> 
             I'm a web developer living in the greater Nashville area. 
             I am an idea person but also analytical which helps me in taking 
             complexity and identifying solutions through the right ideas. Let's collaborate.
        </p>
        </>
             )
    }
    
    function TitleThree(){
        return <h2 style={{ color: 'white'}}>Flashcard app</h2>
    }
    
    function BodyThree(){
        return (
            <>
         <p style={{color: 'white' }}> 
             I'm a web developer living in the greater Nashville area. 
             I am an idea person but also analytical which helps me in taking 
             complexity and identifying solutions through the right ideas. Let's collaborate.
        </p>
        </>
             )
    }
    
    
    //for desktop: column with 3 rows. row 1 has 2 items, row 2 has arrows row three has third item in center
    //for mobile column with 4 rows 1 item per row diagonally left to right 
    return (
        <>
        <div style={{ width: `${100}%`, display: null, opacity: 100}} className="about">
    
    
    
    
           <div className="arrow-column" > 
                <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                <div className='arrow'>{'<'}</div>
                </Link> 
          </div>
  
           <div>

               <h3>Contact Me</h3>
               
               <div>
                   <p> <a href="https://github.com/ColinWeaver"> GitHub </a></p>
                    <p>LinkedIn</p>
                    <p>Composerman11@gmail.com</p>
                    <p>615-438-5452</p>

                   
                    <a href="mailto:composerman11@gmail.com"> Email </a>
                    <a href="https://www.linkedin.com/in/colin-weaver-969505217/"> LinkedIn</a>
               </div>
               
    
    
        </div>
        </div>
        
        </>
    )
}

export default Contact;