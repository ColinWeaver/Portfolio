import React, {useEffect, useState} from "react";
import { Link, useLocation }  from 'react-router-dom';
import image from "./media/profilePhoto.jpg";
import resumeImage from "./media/Colin-Weaver-resume-png.png";

function About({setPosition}){
const [showResume, setShowResume] = useState(false);
const [resumeArrow, setResumeArrow] = useState("Click to show resume");
const [containerOpacity, setContainerOpacity] = useState(.2);
const [shadow, setShadow] = useState(0);
const [paddingLeft, setPaddingLeft] = useState(0);
const [paddingRight, setPaddingRight] = useState(0);
const [display, setDisplay] = useState('none');
const location = useLocation();
setPosition('fixed');


useEffect(() => {
  if (location.state){
    if (location.state.origin === 'left'){
        setPaddingLeft(80);
    }
  }
    else {
        setPaddingRight(100);
    }
}, [location.state])


useEffect(() => {
  if ((paddingLeft === 0) && paddingRight === 0){
    setDisplay('inline');
  }
}, [paddingLeft, paddingRight])

//-----------------------------------------------------------------SCROLL RESET--------------------------------------------------------------------------------------------------
useEffect(() => {
    window.scrollTo(0,0);
}, [])   


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
                <img style={{width: '75%'}} alt="resume-image" src={resumeImage}></img>
                </>
                )
            }
            else return null;
        }
//----------------------------------------------------------------PAGE SLIDE------------------------------------------------------------------------------ 
//page slide from left
useEffect(() => {
    if (paddingLeft > 0){
    const timer = setTimeout(() => {
    async function paddingSet(){
    if ((paddingLeft > 0) && containerOpacity < 100){
    await setContainerOpacity((containerOpacity) => containerOpacity + 5)
    }
    await setPaddingLeft((padding) => padding - 1);
  }
    paddingSet();
  }, 1)
  return () => clearTimeout(timer);
    }
  }, [paddingLeft])

  //page slide from right
  useEffect(() => {
    if (paddingRight > 0){
    const timer = setTimeout(() => {
    async function paddingSet(){
    if ((paddingRight > 0) && containerOpacity < 100){
    await setContainerOpacity((containerOpacity) => containerOpacity + 4)
    }
    await setPaddingRight((padding) => padding - 1);
  }
    paddingSet();
  }, 1)
  return () => clearTimeout(timer);
    }
  }, [paddingRight])


  //for shadow
  useEffect(() => {
    if ((paddingLeft === 0) && paddingRight === 0){
    const timer = setTimeout(() => {
    async function shadowSet(){
    if (shadow < 15 )
    await setShadow((shadow) => shadow + .2);
  }
    shadowSet();
  }, 5)
  return () => clearTimeout(timer);
    }
  }, [paddingRight, paddingLeft, shadow])
  
  useEffect(() => {
    if (shadow === 15){
      location.state.origin = null;
    }
  }, [shadow])
    

  //----------------------------------------------------------------MAIN COMPONENT RENDER RETURN------------------------------------------------------------------------------ 
        return (
            <>
            
            <div style={{opacity: `${containerOpacity}%`, paddingLeft: `${paddingLeft}%`, paddingRight: `${paddingRight}%`}}>
           <h2 style={{textAlign: 'center', color: null}}>About Me</h2>
           <hr style={{width: '250px', borderTop: '1px solid grey', borderBottom: '0px'}}/>
           <div style={{ width: `${90}%`, display: null, opacity: 100}} className="about">
              
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="arrow-container-left">
                    <p className="arrow-left"></p>
                    </div>
                </Link> 

           {/* ------------------------------------------------------------- */}
          
           
                    <div style={{alignItems: 'right', boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`, display: 'flex', width: '90%', flexDirection: 'column', borderRadius: '9px' , padding: '10px', paddingBottom: '20px'}}>
                   
                        <div className="container-for-image" style={{textAlign: 'center'}} >
                          <img src={image} style={{margin: '10px', marginBottom: '0px', width: '200px', borderRadius: '2px', display: `${display}`}}/>
                          <div>
                             <h3 className="page-sub-title">Background</h3>
                      
                             <p style={{textAlign: 'left'}}> 
                                    Creative fields are my comfort zone. 
                                    I grew up composing music (I was a classically trained pianist from ages 6 to 18), 
                                    making films, and later creatively collaborating with others throughout college 
                                    (where I studied Video and Film Production) and after.
                                    My analytical skills have been developed through years of 
                                    classical music training, editing film projects, studying as a math major for 1 to 2 years in college, 
                                    and building software applications and programs.
                            </p>
                          </div>
                        </div>
                            
                               
                                <br/>
                                <div>
                                
                               <h3 className="page-sub-title">Training and Experience</h3>
                                <p style={{textAlign: 'left'}}> 
                                Over the last year I've been in the process of transitioning into the tech industry. I found myself in a line of work 
                                where I wasn't able to utilize my creative and analytical skills professionally and decided to pursue work in a field I would be better suited for. 
                                I spent 9 months in a tech program called Thinkful where I was trained extensively in full stack web development techniques.
                                Although I had some coding experience prior, I acquired the majority of my tech experience over those 9 months. 
                                 </p> 

                                 <p style={{textAlign: 'left'}}>
                                 During the program I completed multiple projects including: an API with a number of complex routes navigating 
                                 through 5 or 6 different tables, a frontend app that used various CRUD requests to allow a user to manage decks of study cards, 
                                 and a full stack app that allows a restaurant to manage reservations (linked in my projects page to the right).
                                 I completed a number of smaller assignments of varying complexity throughout as well where I gained experience using tools 
                                 such as Express, Knex, PostgreSQL, React, HTML, CSS, and Bootstrap. Throughout the program I also had private mentor sessions 
                                 multiple times a week with a 15+ year software developer and was required to pass multiple mock coding interviews.
                                </p>
                                </div>

                                </div>

                    
                    

            {/* ------------------------------------------------------------- */}
                    
                    <div style={{ width: '90%', height: null, marginTop: '20px'}}>
                    <h3 className="page-sub-title">Skills</h3>
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
                   
                </div>
              
            {/* ------------------------------------------------------------- */}

            <Link to={'/projects'} state={{origin: 'left'}} style={{ textDecoration: 'none' }}>
            <div className="arrow-container-right">
            <p className="arrow-right"> </p>
            
            </div>
            </Link>
    </div>
    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
      <Resume/>
    </div>
    </div>
   


 </>
        )
        
        
        


}

export default About;