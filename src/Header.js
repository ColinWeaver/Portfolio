import React, {useState} from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom"


function Header({position}){
return (
<header style={{position: `${position}`}}>
<div className='header-title'>
<Link to="/">
<h3 style={{ color: null}}>Colin Weaver <span style={{fontWeight: '500', boxShadow: '5px 5px 5px black', padding: '5px', borderRadius: '5px'}}>- Web Developer</span></h3>
</Link>
<hr style={{width: '25%', borderTop: '1px solid grey', borderBottom: '0px'}}/>
</div>
<Navigation/>

</header>
)

}


export default Header;