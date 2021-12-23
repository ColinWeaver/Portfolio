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


function resumeArrowHandler(){
setShowResume((value) => !value);
setResumeArrow((arrow) => {
    if (arrow === "Click to show resume"){
        return "Click to hide resume"
    }
    else return "Click to show resume"
}); 
}

//url where i found up down arrows:
// https://www.zesolution.com/en/technology/internet/how-to-make-the-arrows-%E2%86%91-%E2%86%93-%E2%86%92-%E2%86%90-on-your-keyboard.html


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
            ];

        function TitleOne(){
            return <h3 style={{ color: null, textAlign: 'left'}}>Background</h3>
        }
        
        function BodyOne(){
            return (
                <>
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
              in a fast paced distribution warehouse.</p>
             {/* I've also spent countless hours working to increase my knowledge in subjects such as Psychology, Mathematics, Economics, and Finance.   */}
            
            </div>
            </>
                 )
        }

        
        function BodyTwo(){
            return (
                <>
             <p style={{color: null }}> 
                 Over the last year I've been in the process of transitioning into the tech industry. I spent 9 months in a 
                 tech program called Thinkful where I was trained extensively in full stack web development techniques and had private mentor sessions multiple 
                 times a week with a 15+ year software developer. 
            </p>
            </>
                 )
        }


        function Resume(){
            if (showResume){
                return (
                <>
                <img src={resumeImage}></img>
                </>
                )
                
            }
            else return null;
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
                <div className="item-one" >
                    <div className="item-one-paragraph">
                    <TitleOne/>
                    <BodyOne/>
                    <BodyTwo/>
                    </div>
                </div>
               
            
                <h3>Skills</h3>
               <div style={{width: '100%', height: '500px'}}>
                   {skills.map((skill) => {
                   if (skill === skills[skills.length - 1]){
                       return <> {skill}{'.'}
                       <span className="resume-link" style={{ fontSize: null, fontWeight: 'bold'}} onClick={resumeArrowHandler}> {resumeArrow}</span>{'.'}
                       
                       </>
                   }
                return <>{skill}{',   '}</>
            }
               )}

           {/* <h3>Resume</h3>
            <div>
             <p style={{ fontSize: '20px', textAlign: 'center'}} onClick={resumeArrowHandler}> {resumeArrow}</p>
            <Resume/>
            </div> */}
            <Resume/>
           

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