import React from "react"
import { Link, useNavigate}  from 'react-router-dom'


function Intro({setPage, buttonDisplay}){
    const navigate = useNavigate();

function viewProjectsHandler(){
setPage('/projects');
navigate({pathname: '/'});
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
    <button onClick={viewProjectsHandler} style={{display: {buttonDisplay}}}><h3 style={{display: null}}>{`About Me > `}</h3></button>
    </Link>
    </div>
    </>
)





}

export default Intro;