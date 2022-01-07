import React, {useState, useEffect} from "react"
import { Link }  from 'react-router-dom'


function Intro({setPosition, position}){
 
//-----------------------------------------------------------------STATE VARIABLES--------------------------------------------------------------------------------------------------
  //arrow 
  const [arrowColor, setArrowColor] = useState('#EOEOEO');
  const [arrowContainerWidth, setArrowContainerWidth] = useState(100);
  const [display, setDisplay] = useState('none');
  //STYLE FOR LETTERS
  const [opacityOne, setOpacityOne] = useState(0);
  const [opacityTwo, setOpacityTwo] = useState(0);
  const [opacityThree, setOpacityThree] = useState(0);
  const [opacityFour, setOpacityFour] = useState(0);


  //container
  const [containerOpacity, setContainerOpacity] = useState(.25);
  const [width, setWidth] = useState(0);
  const [shadow, setShadow] = useState(2);



  useEffect(() => {
    if (opacityFour >= 1){
      setPosition('fixed');
    }
  }, [opacityFour])
//-----------------------------------------------------------------SCROLL RESET--------------------------------------------------------------------------------------------------
  useEffect(() => {
    window.scrollTo(0,0);
}, []) 
//-----------------------------------------------------------------SET ARROW COLOR TO WHITE-----------------------------------------------------------------------------------
useEffect(() => {
if ((arrowContainerWidth <= 2) && arrowColor === '#EOEOEO'){
  setArrowColor('white');
}
}, [arrowContainerWidth, arrowColor])


//-----------------------------------------------------------------ARROW COLOR LOOP-------------------------------------------------------------------------------------------------
useEffect(() => {
  if (arrowColor === 'white'){
  const timer = setTimeout(() => {
  async function arrowColorSet(){
  await setArrowColor('#EDEDED');
}
  arrowColorSet();
}, 200)
return () => clearTimeout(timer);
  }

  if (arrowColor === '#EDEDED'){
    const timer = setTimeout(() => {
    async function arrowColorSet(){
    await setArrowColor('#C8C8C8');
  }
    arrowColorSet();
  }, 200)
  return () => clearTimeout(timer);
    }

    if (arrowColor === '#C8C8C8'){
        const timer = setTimeout(() => {
        async function arrowColorSet(){
        await setArrowColor('#494949');
      }
        arrowColorSet();
      }, 200)
      return () => clearTimeout(timer);
        }

        if (arrowColor === '#494949'){
          const timer = setTimeout(() => {
          async function arrowColorSet(){
          await setArrowColor('white');
        }
          arrowColorSet();
        }, 200)
        return () => clearTimeout(timer);
          }
}, [arrowColor])

//-----------------------------------------------------------------CONTAINER SLIDE IN-------------------------------------------------------------------------------------------------

useEffect(() => {
  if (width < 100){
  const timer = setTimeout(() => {
  async function widthSet(){
  //increment opacity
  if (width > 25){
  await setContainerOpacity((containerOpacity) => containerOpacity + .1)
  }
  
  await setWidth((width) => width + 1);
}
  widthSet();
}, 1)
return () => clearTimeout(timer);
  }
}, [width])
//----------------------------------------------------------SHADOW INCREMENT-----------------------------------------------------------------------------
useEffect(() => {
  if (width === 100){
  const timer = setTimeout(() => {
  async function shadowSet(){
  
  // increment shadow
  if (shadow < 50 )
  await setShadow((shadow) => shadow + .2);
}
  shadowSet();
}, 5)
return () => clearTimeout(timer);
  }
}, [width, shadow])

//----------------------------------------------------------USEEFFECTS FOR TEXT OPACITY-------------------------------------------------------------------------------------------------------


useEffect(() => {
    if (shadow > 49){
      if (opacityOne < 1){
      const timer = setTimeout(() => {
        async function opacitySet(){
        await setOpacityOne((opacity) => opacity + .08)
         }
        opacitySet();
      }, 6)
        return () => clearTimeout(timer);
      }
    }
}, [shadow, opacityOne])

// opacityTwo
useEffect(() => {
  if (opacityOne >= 1){
    if (opacityTwo < .2){
    const timer = setTimeout(() => {
      async function opacitySet(){
      await setOpacityTwo((opacity) => opacity + .2)
       }
      opacitySet();
    }, 1500)
      return () => clearTimeout(timer);
    }

    if ((opacityTwo >= .2) && opacityTwo < 1){
      const timer = setTimeout(() => {
        async function opacitySet(){
        await setOpacityTwo((opacity) => opacity + .08)
         }
        opacitySet();
      }, 10)
        return () => clearTimeout(timer);
  
      }    
  }
}, [opacityOne, opacityTwo])


// //opacityThree
useEffect(() => {
  if (opacityTwo >= 1){
    if (opacityThree < .2){
    const timer = setTimeout(() => {
      async function opacityThreeSet(){
      await setOpacityThree((opacity) => opacity + .2)
       }
      opacityThreeSet();
    }, 1500)
      return () => clearTimeout(timer);
    }
   
       if ((opacityThree >= .2) && opacityThree < 1){
      const timer = setTimeout(() => {
        async function opacityThreeSet(){
        await setOpacityThree((opacity) => opacity + .08)
         }
        opacityThreeSet();
      }, 10)
        return () => clearTimeout(timer);
  
      }    
  }
}, [opacityTwo, opacityThree])


//opacity 4
useEffect(() => {
  if (opacityThree >= 1){
    if (opacityFour < .2){
      const timer = setTimeout(() => {
      async function opacitySet(){
      await setOpacityFour((opacity) => opacity + .2)
       }
      opacitySet();
    }, 1200)//PAUSE BEFORE DISPLAYING
      return () => clearTimeout(timer);
    }

    if ((opacityFour >= .2) && opacityFour < 1){
      const timer = setTimeout(() => {
        async function opacitySet(){
        await setOpacityFour((opacity) => opacity + .08)
         }
        opacitySet();
      }, 10)
        return () => clearTimeout(timer);
      }    
  }
}, [opacityThree, opacityFour])

//----------------------------------------------------------ARROW SLIDE ACROSS SCREEN--------------------------------------------------------------------------------------------------------
useEffect(() => {
if ((opacityFour >= 1) && arrowContainerWidth > 2){
  const timer = setTimeout(() => {
    async function arrowContainerWidthSet(){
    await setArrowContainerWidth((width) => width - 1)
     }
    arrowContainerWidthSet();
  }, 10)
    return () => clearTimeout(timer);
  }
}, [arrowContainerWidth, opacityFour])

useEffect(() => {
  if (opacityFour >= 1){
    setDisplay('inline-block');
  }
}, [opacityFour])



//----------------------------------------------------------MAIN COMPONENT RENDER RETURN--------------------------------------------------------------------------------------------------------
return (
    
    <>
    <div style={{width: '90%'}}>
    <div style={{width: `${width}%`, height: '280px', opacity: `${containerOpacity}`, boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`, borderRadius: '10px'}} className="about">
    <div style={{textAlign: "left", width: '100%', opacity: "1", paddingLeft: '40px'}}>
    
    <h3> 
       <span style={{opacity: `${opacityOne}`}}>Hi, </span>
       <span style={{opacity: `${opacityTwo}`}}>my name is Colin.</span>
   </h3>
    <p style={{opacity: `${opacityThree}`, marginRight: '10px'}}>I'm a web developer living in the greater Nashville area.</p>
    <p style={{opacity: `${opacityFour}`}}>Click the arrow to read more. </p>
    </div>

            <Link to={'/about'} state={{origin: 'left'}} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-right" style={{paddingRight: `${arrowContainerWidth}%`}}>
                {/* <p className="arrow" style={{color: `${arrowColor}`, display: `${display}`}} >{'>'}</p> */}
                <p className="arrow-right" style={{color: `${arrowColor}`, display: `${display}`}}><p style={{}}>{' '}</p></p>
                <p className="arrow-right" style={{backgroundColor: `${arrowColor}`, display: `${display}`}}><p style={{backgroundColor: 'blue'}}>{'text'}</p></p>
                <p className="arrow-right" style={{backgroundColor: `${arrowColor}`, display: `${display}`}}><p style={{backgroundColor: `${arrowColor}`}}>{'text'}</p></p>
                <div className="arrow-right" style={{backgroundColor: `${arrowColor}`, display: `${display}`}}><p style={{display: 'none'}}>{'text'}</p></div>
                </div>
            </Link>

    </div>
    </div>
    
    </>
)





}

export default Intro;