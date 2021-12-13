import React from "./Projects";
import { Link, useNavigate}  from 'react-router-dom'

function Projects(){
    //right column in main component
    const navigate = useNavigate();

    function viewProjectsHandler(){
        // setPage('/projects');
        navigate({pathname: '/'});
        }
        
        function TitleOne(){
            return <h2 style={{ color: 'white'}}>Background</h2>
        }
        
        function ParagraphOne(){
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
            <TitleOne/>
            <ParagraphOne/>
            </div>
            <div>
        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
            <button onClick={viewProjectsHandler} style={{display: null}}><h3 style={{display: null}}>{`< back`}</h3></button>
            </Link>
            </div>
            </>
        )
        
        
        


}

export default Projects;