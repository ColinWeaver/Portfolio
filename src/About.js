import React, {useState} from "react";
import { Link, useNavigate}  from 'react-router-dom';
import image from "./media/profilePhoto.jpg";
function About({opacity, setOpacity, nextPageHandler, display, setDisplay, width, setWidth}){
    window.scrollTo(0,0);


//------------------------------------------------------------Slide in page-----------------------------
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
            ]


        function TitleOne(){
            return <h3 style={{ color: null, textAlign: 'left'}}>Background</h3>
        }
        
        function BodyOne(){
            return (
                <>
                <div>
            
             <img src={image} style={{width: '250px', float: 'left', marginRight: '10px'}}/>
         
             <p style={{color: null}}> 
             Creative fields are my comfort zone. 
             I grew up composing music (I was a classically trained pianist from ages 6 to 18), 
             making films, and later creatively collaborating with others throughout college 
             (where I studied Video and Film Production) and after.
             My interpersonal skills have been refined over my years working in these endeavors as well as through years
             of providing customer service as a driver. My analytical skills have been developed through years of 
             classical music training, editing film projects, studying as a math major for 1 to 2 years in college, 
             and building software applications. I’m a very tireless worker as well, having spent years working long shifts
              in a fast paced distribution warehouse.</p>
             {/* I've also spent countless hours working to increase my knowledge in subjects such as Psychology, Mathematics, Economics, and Finance.   */}
            
            </div>
            </>
                 )
        }

        // function TitleTwo(){
        //     return <h3 style={{ color: null, textAlign: 'center' }}>Development Experience</h3>
        // }
        
        function BodyTwo(){
            return (
                <>
             <p style={{color: null }}> 
                 Over the last year I've been in the process of transitioning into the tech industry. I spent 9 months in a 
                 tech program called Thinkful where I was trained extensively in full stack web development techniques and had private mentor sessions multiple 
                 times a week with a 15+ year software developer. 
                 {/* I had some experience prior to the program using some front-end languages and using Python. The tech
                 program is where I acquired the majority of my experience using frameworks such as React, Bootstrap, and Express, 
                 as well as how to setup and query PostgreSQL databases using the Knex library. */}
                 
            </p>
            </>
                 )
        }

    
        return (
            <>
           <h2 style={{textAlign: 'center', color: null}}>About Me</h2>

            <div style={{ width: `${100}%`, display: null, opacity: 100}} className="about">
            
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="arrow-container-left">
                       <div className='arrow'>{'<'}</div>
                    </div>
                    </Link> 
             
               <div className="paragraphs-container">
                <div className="item-one">
                    <div className="item-one-paragraph">
                    <TitleOne/>
                    <BodyOne/>
                    <BodyTwo/>
                    </div>
                </div>
               
            
                <h3>Skills</h3>
               <div style={{width: '100%', height: '500px'}}>{skills.map((skill) => {
                   if (skill === skills[skills.length - 1]){
                       return <> {skill}{'.'}</>
                   }
                return <>{skill}{',   '}</>
            }
               )}
               </div>

            </div>

            
           
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