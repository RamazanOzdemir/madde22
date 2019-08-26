import React from 'react'
import NavLinks from './NavLinks';

const Navbar = ()=>{
    return (
        <div className='navbar navbar--bg' >
            <img src='img/brand.png'alt='' className='navbar__logo'/>
            <NavLinks/>
            <img  alt ='' className='navbar__logout'src="https://img.icons8.com/ios/50/000000/export.png"/>
        </div>
    )
}

export default Navbar;
