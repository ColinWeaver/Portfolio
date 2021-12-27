import React, {useState, useEffect} from "react"
import { Link }  from 'react-router-dom'


function Intro({opacity, setOpacity, width, setWidth, display, setDisplay, nextPageHandler }){
  
  useEffect(() => {
    window.scrollTo(0,0);
}, []) 

    const [arrowColor, setArrowColor] = useState('white');
    

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
}, [arrowColor, display])


//------------------------------------------------------------Slide in page-----------------------------
// useEffect(() => {
//   //runs at initial render for eah page. this is for left to right. uses ocapity, width, and display
//   if (width < 100){
//  const timer = setTimeout(() => {
//   async function widthSet(){
//   if (width > 1) {
//     await setWidth(1);
//   };
//   if (width > 25){
//   await setOpacity((opacity) => opacity + .1)
//   }
//   await setWidth((width) => width + 1)
//   if (width === 1){
//  await setDisplay('none');
// }
// }
//   widthSet();
// }, 5)
// return () => clearTimeout(timer);
//   }
// }, [width])



return (
    
    <>
    <div style={{ width: `90%`}} className="about">
    <div style={{textAlign: "left", width: '100%', opacity: null}}>
    <h3>Hi, I'm Colin.</h3>
    <p><span> I'm a web developer </span><span>living in the greater Nashville area.</span></p>
    <p>Click the arrow on the right to read more.</p>
   
    </div>

            <Link to={'/about'} style={{ textDecoration: 'none' }}>
                <div className="arrow-container-right">
                    <div style={{color: `${arrowColor}`}}className='arrow'>{'>'}</div>
                </div>
            </Link>

    </div>
    </>
)





}

export default Intro;