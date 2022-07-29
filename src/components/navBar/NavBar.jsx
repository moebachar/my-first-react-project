import React from 'react';
import source from '../../assets/images/logo.png';
import './navBar.scss';



function NavBar() {
    return (
        <>
        <nav className="top-nav">
            <a className='logo'>
                <img src={source} alt='logo' />
                <span>Gadz ' IT</span>
            </a>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
        </label>
            <ul className="menu">
            <li><a href='#home'>Home</a></li>
            <li><a href='#club'>Club</a></li>
            <li><a href='#courses'>Courses</a></li>
            <li><a href='#committee'>committee</a></li>
            <li><a href='#members'>Members</a></li>
            <li className='contact-inlist'><a>Contact</a></li>
            </ul>
            <a href='#contact-us' className='contact'>
                Contact
            </a>
            
        </nav>
        </>
    );
}

export default NavBar;