import React, {useEffect, useState} from "react";
import { Link }  from 'react-router-dom';
import image from "./media/profilePhoto.jpg";
import resumeImage from "./media/Colin-Weaver-resume-png.png";

function About(){
useEffect(() => {
    window.scrollTo(0,0);
}, [])   

const [showResume, setShowResume] = useState(false);
const [resumeArrow, setResumeArrow] = useState("Click to show resume");

//----------------------------------------------------------------ARROW HANDLER------------------------------------------------------------------------------
function resumeArrowHandler(){
setShowResume((value) => !value);
setResumeArrow((arrow) => {
    if (arrow === "Click to show resume"){
        return "Click to hide resume"
    }
    else return "Click to show resume"
}); 
}

//----------------------------------------------------------------SKILLS LIST------------------------------------------------------------------------------
       const skills = [
           'Relational Databases',
            'JavaScript ES6',
             'HTML5', 
             'CSS3', 
             'React & React hooks', 
             'Express', 
             'PostgreSQL', 
             'SQL', 
             'Mocha', 
             'Chai', 
             'Git & GitHub',
             'Heroku',
             'Node Package Manager',
             'ElephantSQL'
            ];

    

//----------------------------------------------------------------RESUME COMPONENT------------------------------------------------------------------------------
        function Resume(){
            if (showResume){
                return (
                <>
                <img alt="resume-image" src={resumeImage}></img>
                </>
                )
                
            }
            else return null;
        }
//----------------------------------------------------------------MAIN COMPONENT RENDER RETURN------------------------------------------------------------------------------ 
        

    
        return (
            <>
           <h2 style={{textAlign: 'center', color: null}}>About Me</h2>
           <div style={{ width: `${100}%`, display: null, opacity: 100}} className="about">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="arrow-container-left">
                       <div className='arrow'>{'<'}</div>
                    </div>
                </Link> 

             
<hr style={{color: 'black', backgroundColor: 'pink'}}/>
           {/* ------------------------------------------------------------- */}
                    <div style={{display: 'flex', width: '90%', flexDirection: 'column', boxShadow: '10px 10px 10px grey', borderRadius: '9px' , padding: '20px', paddingBottom: '50px'}}>
                    <hr/>
                        <h3 style={{ color: null, textAlign: 'left'}}>Background</h3>
                        <hr/>

           
                        <div className='img-container'>
                          <img src={image} style={{width: '250px', marginRight: '10px'}}/>
                                <p style={{color: null}}> 
                                    Creative fields are my comfort zone. 
                                    I grew up composing music (I was a classically trained pianist from ages 6 to 18), 
                                    making films, and later creatively collaborating with others throughout college 
                                    (where I studied Video and Film Production) and after.
                                    My interpersonal skills have been refined over my years working in these endeavors as well as through years
                                    of providing customer service as a driver. My analytical skills have been developed through years of 
                                    classical music training, editing film projects, studying as a math major for 1 to 2 years in college, 
                                    and building software applications. I’m a very tireless worker as well, having spent years working long shifts
                                    in a fast paced distribution warehouse.
                                </p>
                        </div>

                         <p style={{color: null }}> 
                                Over the last year I've been in the process of transitioning into the tech industry. I spent 9 months in a 
                                tech program called Thinkful where I was trained extensively in full stack web development techniques and had private mentor sessions multiple 
                                times a week with a 15+ year software developer. 
                         </p>
                       </div>


               
            {/* ------------------------------------------------------------- */}
                    <h3>Skills</h3>
                    <div style={{width: '100%', height: '500px'}}>
                        {skills.map((skill) => {
                            if (skill === skills[skills.length - 1]){
                                return <> {skill}{'.'}
                                        <Link to="/about">
                                        <span className="resume-link" style={{ fontSize: null, fontWeight: 'bold', fontFamily: 'helvetica', color: '#494949'}} onClick={resumeArrowHandler}><i> {resumeArrow}</i></span>{"."}
                                        </Link>
                                       </>
                                 }
                            return <>{skill}{',   '}</>
                            }
                        )}

                    <Resume/>
                </div>


            {/* ------------------------------------------------------------- */}
           


            <Link to={'/projects'} style={{ textDecoration: 'none' }}>
            <div className="arrow-container-right">
                    <div className='arrow'>{'>'}</div>
            </div>
            </Link>
    </div>
 </>
        )
        
        
        


}

export default About;