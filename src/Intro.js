import React from "react"
import {Link} from 'react-router-dom'


function Intro({setPage}){
    

function viewProjectsHandler(){
setPage('/projects');

}




function Title(){
    return <h2 style={{ color: 'white'}}>Hi, I'm Colin.</h2>
}

function Paragraph(){
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


// let buttonText = "View Projects   "
// let buttonArrow = ">"
return (
    <>
    <div >
    <Title/>
    <Paragraph/>
    </div>
    <div>
        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
    <button onClick={viewProjectsHandler}><h3 style={{textDecoration: 'none'}}>View Projects </h3></button>
    </Link>
    </div>
    </>
)





}

export default Intro;