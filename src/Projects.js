import React from "react";
import { Link, useNavigate}  from 'react-router-dom'

function Projects({}){


//------------------------------------------------------------Slide in page-----------------------------
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
            <Link to={'/about'} style={{ textDecoration: 'none' }}>
            <div className='arrow'>{'<'}</div>
            </Link> 
      </div>

       <div className="paragraphs-container">
        <div className="item-one">
            
            <div className="item-one-paragraph">
            <TitleOne/>
            <BodyOne/>
            </div>
        </div>

        <div className="item-two">
        <div className="item-two-paragraph">
        <TitleTwo/>
        <BodyTwo/>
        </div>
        </div>

        
    <div className="item-three">
    <div className="item-three-paragraph">
        <TitleThree/>
        <BodyThree/>
    </div>
    </div>
    </div>


    <div className="arrow-column">
    <Link to={'/contact'} style={{ textDecoration: 'none' }}>
            <div className='arrow'>{'>'}</div>
    </Link>
    </div>


    </div>
    
    </>
)

}

export default Projects;