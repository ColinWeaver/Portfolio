import React, {useState} from "react";
import { Link, useNavigate}  from 'react-router-dom'

function About({opacity, setOpacity, nextPageHandler, display, setDisplay, width, setWidth}){
    // const navigate = useNavigate();


//------------------------------------------------------------Slide in page-----------------------------

        function TitleOne(){
            return <h2 style={{ color: 'white'}}>Background</h2>
        }
        
        function BodyOne(){
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

        function TitleTwo(){
            return <h2 style={{ color: 'white'}}>Experience</h2>
        }
        
        function BodyTwo(){
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

        function TitleThree(){
            return <h2 style={{ color: 'white'}}>Skills</h2>
        }
        
        function BodyThree(){
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


//for desktop: column with 3 rows. row 1 has 2 items, row 2 has arrows row three has third item in center
//for mobile column with 4 rows 1 item per row diagonally left to right 
        return (
            <>
            <div style={{ width: `${100}%`, display: null, opacity: 100}} className="about">


                <div className="item-one">
                    <div>
                    <TitleOne/>
                    <BodyOne/>
                    </div>
                </div>
            

                <div className="buttons-container">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className='arrow'>{'<'}</div>
                    </Link>
                    <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                    <div className='arrow'>{'>'}</div>
                    </Link>
                </div>


                <div className="item-two">
                <div>
                <TitleTwo/>
                <BodyTwo/>
                </div>
                </div>

            <div className="item-three">
            <div>
                <TitleThree/>
                <BodyThree/>
            </div>
            </div>

        
            </div>
            </>
        )
        
        
        


}

export default About;