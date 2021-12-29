import React, {useState, useEffect} from "react"
import { Link }  from 'react-router-dom'


function Intro(){
 
  
//-----------------------------------------------------------------STATE VARIABLES--------------------------------------------------------------------------------------------------
  //arrow 
  const [arrowColor, setArrowColor] = useState('white');
 
  //STYLE FOR LETTERS
  const [opacityOne, setOpacityOne] = useState(0);
  const [opacityTwo, setOpacityTwo] = useState(0);
  const [opacityThree, setOpacityThree] = useState(0);
  const [opacityFour, setOpacityFour] = useState(0);


  //container
  const [containerOpacity, setContainerOpacity] = useState(.25);
  const [width, setWidth] = useState(0);
  const [shadow, setShadow] = useState(2);
//-----------------------------------------------------------------SCROLL RESET--------------------------------------------------------------------------------------------------
  useEffect(() => {
    window.scrollTo(0,0);
}, []) 

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
  //increment width
  await setWidth((width) => width + 1);
}
  widthSet();
}, 4)
return () => clearTimeout(timer);
  }
}, [width])
//----------------------------------------------------------SHADOW INCREMENT-----------------------------------------------------------------------------
useEffect(() => {
  if (width === 100){
  const timer = setTimeout(() => {
  async function shadowSet(){
  
  // increment shadow
  if (shadow < 76 )
  await setShadow((shadow) => shadow + .2);
}
  shadowSet();
}, 5)
return () => clearTimeout(timer);
  }
}, [width, shadow])

//----------------------------------------------------------FUNCTION FOR LETTER OPACITY--------------------------------------------------------------------------------------------------------


useEffect(() => {
    if (shadow > 75){
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

opacityTwo
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

    if (opacityTwo >= .2){
      const timer = setTimeout(() => {
        async function opacitySet(){
        await setOpacityTwo((opacity) => opacity + .08)
         }
        opacitySet();
      }, 5)
        return () => clearTimeout(timer);
  
      }    
  }
}, [opacityOne, opacityTwo])


// //opacityThree
// useEffect(() => {
//   console.log(opacityThree)

//   if (opacityTwo >= 1){
//     console.log(opacityTwo, opacityThree)
//     if (opacityThree < .2){
//     const timer = setTimeout(() => {
//       async function opacityThreeSet(){
//       await setOpacityThree((opacity) => opacity + .2)
//        }
//       opacityThreeSet();
//     }, 50)
//       return () => clearTimeout(timer);
//     }
   

//        if (opacityThree >= .2){
//       const timer = setTimeout(() => {
//         async function opacityThreeSet(){
//         await setOpacityThree((opacity) => opacity + .08)
//          }
//         opacityThreeSet();
//       }, 5)
//         return () => clearTimeout(timer);
  
//       }    
//   }
// }, [opacityTwo])



// useEffect(() => {
//   console.log('test 7')
//   if (opacityThree >= 1){
//     if (opacityFour < .08){
//     const timer = setTimeout(() => {
//       async function opacitySet(){
//         console.log('test 8')
//       await setOpacityThree((opacity) => opacity + .2)
//        }
//       opacitySet();
//     }, 1000)
//       return () => clearTimeout(timer);
//     }

//     if (opacityFour >= .08){
//       console.log('test 9')
//       const timer = setTimeout(() => {
//         async function opacitySet(){
//           console.log('test 10')
//         await setOpacityFour((opacity) => opacity + .08)
//          }
//         opacitySet();
//       }, 5)
//         return () => clearTimeout(timer);
  
//       }    
//   }
// }, [opacityThree, opacityFour])









//----------------------------------------------------------MAIN COMPONENT RENDER RETURN--------------------------------------------------------------------------------------------------------

return (
    
    <>
    <div style={{width: '90%'}}>
    <div style={{width: `${width}%`, opacity: `${containerOpacity}`, boxShadow: `${shadow}px ${shadow}px ${shadow}px grey`, borderRadius: '10px'}} className="about">
    <div style={{textAlign: "left", width: '100%', opacity: "1", paddingLeft: '40px', paddingBottom: '150px'}}>
    
    <h3> 
       <span style={{opacity: `${opacityOne}`}}>Hi, </span>
       <span style={{opacity: `${opacityTwo}`}}>my name is Colin.</span>
   </h3>
    <p style={{opacity: `${opacityThree}`}}>I'm a web developer living in the greater Nashville area.</p>
    <p style={{opacity: `${opacityFour}`}}>Click the arrow to read more. </p>
    </div>

            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-right">
                    <div style={{color: `${arrowColor}`}}className='arrow'>{'>'}</div>
                </div>
            </Link>

    </div>
    </div>
    
    </>
)





}

export default Intro;