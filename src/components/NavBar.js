import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'

import './NavBar.css'

export default function Navbar({ sidebar, setSidebar }) {

    const toggleSidebar = () => setSidebar(prev => !prev)

    return (
        <section className='navbar-container'>
            <div className='navbar'>
                <span onClick={toggleSidebar}>{!sidebar ? <GiHamburgerMenu className='burger-icon' /> : <FaRegWindowClose className='close-icon' />}</span>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' >
                    <li className='navbar-toggle'>
                    </li>
                    <li onClick={() => {
                        window.scroll(0, document.getElementById('about-page')?.offsetTop)
                        setSidebar(false)
                    }}>Conóceme</li>
                    <li onClick={() => {
                        window.scroll(0, document.getElementById('skills-page')?.offsetTop)
                        setSidebar(false)
                    }}>Mis skills</li>
                    <li onClick={() => {
                        window.scroll(0, document.getElementById('works-page')?.offsetTop)
                        setSidebar(false)
                    }}>Proyectos</li>
                    <li onClick={() => {
                        window.scroll(0, document.getElementById('contact-page')?.offsetTop)
                        setSidebar(false)
                    }}>Contáctame</li>
                </ul>
            </nav>
        </section>
    )
}
