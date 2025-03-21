import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'

import './NavBar.css'

export default function Navbar({ sidebar, setSidebar }) {
    const toggleSidebar = () => setSidebar(prev => !prev)
    
    const handleNavClick = (elementId) => {
        window.scroll(0, document.getElementById(elementId)?.offsetTop)
        setSidebar(false)
    }

    return (
        <section className='navbar-container'>
            <div className='navbar'>
                <span onClick={toggleSidebar}>
                    {!sidebar ? 
                        <GiHamburgerMenu className='burger-icon' /> : 
                        <FaRegWindowClose className='close-icon' />
                    }
                </span>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li onClick={() => handleNavClick('about-page')}>
                        Conóceme
                    </li>
                    <li onClick={() => handleNavClick('skills-page')}>
                        Mis skills
                    </li>
                    <li onClick={() => handleNavClick('works-page')}>
                        Proyectos
                    </li>
                    <li onClick={() => handleNavClick('contact-page')}>
                        Contáctame
                    </li>
                </ul>
            </nav>
        </section>
    )
}
