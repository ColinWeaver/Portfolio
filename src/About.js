import React, {useState} from "react";
import { Link, useNavigate}  from 'react-router-dom'

function About({opacity, setOpacity, nextPageHandler, display, setDisplay, width, setWidth}){
    window.scrollTo(0,0);


//------------------------------------------------------------Slide in page-----------------------------

        function TitleOne(){
            return <h3 style={{ color: null, textAlign: 'center'}}>Background</h3>
        }
        
        function BodyOne(){
            return (
                <>
             <p style={{color: null}}> 
                 I'm a web developer living in the greater Nashville area. 
                 I am an idea person but also analytical which helps me in taking 
                 complexity and identifying solutions through the right ideas. Let's collaborate.
            </p>
            </>
                 )
        }

        function TitleTwo(){
            return <h3 style={{ color: null, textAlign: 'center' }}>Experience</h3>
        }
        
        function BodyTwo(){
            return (
                <>
             <p style={{color: null }}> 
                 I'm a web developer living in the greater Nashville area. 
                 I am an idea person but also analytical which helps me in taking 
                 complexity and identifying solutions through the right ideas. Let's collaborate.
            </p>
            </>
                 )
        }

        function TitleThree(){
            return <h3 style={{ color: null, textAlign: 'center'}}>Skills</h3>
        }
        
        function BodyThree(){
            return (
                <>
             <p style={{color: null }}> 
                 I'm a web developer living in the greater Nashville area. 
                 I am an idea person but also analytical which helps me in taking 
                 complexity and identifying solutions through the right ideas. Let's collaborate.
            </p>
            </>
                 )
        }


        return (
            <>
           <h2 style={{textAlign: 'center', color: null}}>About Me</h2>

            <div style={{ width: `${100}%`, display: null, opacity: 100}} className="about">
            
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className='arrow'>{'<'}</div>
                    </Link> 
             


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


           
            <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                    <div className='arrow'>{'>'}</div>
            </Link>
            

        
            </div>





            
            </>
        )
        
        
        


}

export default About;