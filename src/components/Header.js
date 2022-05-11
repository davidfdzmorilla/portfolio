import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import Navbar from './NavBar';

import "./Header.css"
import { useState } from 'react';


export default function Header({ scrollY }) {
    const [sidebar, setSidebar] = useState(false)

    const colorDefault = '#808e9b'
    const colorActive = '#16a085'
    let colorAbout
    scrollY + 100 >= document.getElementById('about-page')?.offsetTop && scrollY <= (document.getElementById('about-page')?.offsetTop) + (document.getElementById('about-page')?.offsetHeight - 100) ? colorAbout = colorActive : colorAbout = colorDefault
    let colorSkills
    scrollY + 100 >= document.getElementById('skills-page')?.offsetTop && scrollY <= (document.getElementById('skills-page')?.offsetTop) + (document.getElementById('skills-page')?.offsetHeight - 100) ? colorSkills = colorActive : colorSkills = colorDefault
    let colorWorks
    scrollY + 100 >= document.getElementById('works-page')?.offsetTop && scrollY <= (document.getElementById('works-page')?.offsetTop) + (document.getElementById('works-page')?.offsetHeight - 100) ? colorWorks = colorActive : colorWorks = colorDefault
    let colorContact
    scrollY + 100 >= document.getElementById('contact-page')?.offsetTop && scrollY <= (document.getElementById('contact-page')?.offsetTop) + (document.getElementById('contact-page')?.offsetHeight - 100) ? colorContact = colorActive : colorContact = colorDefault
    return (
        <header>
            <FaCode onClick={() => window.scroll(0, 0)} className='code-icon' />
            <menu>
                <ul className='menu-bar'>
                    <li style={{ color: colorAbout }} onClick={() => window.scroll(0, document.getElementById('about-page')?.offsetTop)}>Conóceme</li>
                    <li style={{ color: colorSkills }} onClick={() => window.scroll(0, document.getElementById('skills-page')?.offsetTop)}>Mis skills</li>
                    <li style={{ color: colorWorks }} onClick={() => window.scroll(0, document.getElementById('works-page')?.offsetTop)}>Proyectos</li>
                    {scrollY > 161 && <li style={{ color: colorContact }} onClick={() => window.scroll(0, document.getElementById('contact-page')?.offsetTop)}>Contáctame</li>}
                </ul>
            </menu>
            <section className='logos-rss-container' >
                <a href='https://www.linkedin.com/in/davidfdzmorilla/' target='_blank' rel="noreferrer nopener"><AiFillLinkedin className='logo' /></a>
                <a href='https://github.com/davidfdzmorilla' target='_blank' rel="noreferrer nopener"><AiFillGithub className='logo' /></a>
                <p onClick={() => {
                    window.scroll(0, 0)
                    setSidebar(false)
                }} className="myName">davidfdzmorilla</p>
            </section>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        </header>
    )
}