import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import sustA from "../../assets/sustA.png";
import menu_icon from "../../assets/menu-icon.png"
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={sustA} alt="The Logo" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>

                <li><Link to="howitworks" smooth={true} offset={-150} duration={500}>How It Works</Link></li>
                <li><Link to="keyfeatures" smooth={true} offset={-250} duration={500}>Key Features</Link></li>
                <li><Link to="articles" smooth={true} offset={-260} duration={500}>Articles</Link></li>
                <li><Link to="Acontainer" smooth={true} offset={-260} duration={500}>About Us</Link></li>
                <li>
                    <Link to="contact" smooth={true} offset={-260} duration={500} className='btn'>Contact</Link>
                </li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>

    )
}

export default Navbar
