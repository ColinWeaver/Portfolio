import React from "react";
import { Link, useNavigate}  from 'react-router-dom'

function Projects({}){
    const navigate = useNavigate();

        function TitleOne(){
            return <h2 style={{ color: 'white'}}>Projects</h2>
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
        
        
    
        return (
            <>
            <div >
            <TitleOne/>
            <ParagraphOne/>
            </div>
            <div>
            </div>
            </>
        )
        
        
        


}

export default Projects;