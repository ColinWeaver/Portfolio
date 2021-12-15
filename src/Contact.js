import React from "react";
import { Link, useNavigate}  from 'react-router-dom'

function Contact({}){
    const navigate = useNavigate();

       
        


        return (
            <>
            <div >
            <h3>Contact Me</h3>
            <div className="buttons-container">
            <Link to={'/projects'} style={{ textDecoration: 'none' }}>
            {/* <button><h3 style={{display: null}}>{`<`}</h3></button> */}
            <div className='arrow'>{'<'}</div>
            </Link>
            
            </div>
            </div>
            <div>
            </div>
            </>
        )
        
        
        


}

export default Contact;