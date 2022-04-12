import "./Header.css"


export default function Header({ scrollY }) {
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
            <section>
                <ul className='menu-bar'>
                    <li style={{ color: colorAbout }} onClick={() => window.scroll(0, document.getElementById('about-page')?.offsetTop)}>Conóceme</li>
                    <li style={{ color: colorSkills }} onClick={() => window.scroll(0, document.getElementById('skills-page')?.offsetTop)}>Mis skills</li>
                    <li style={{ color: colorWorks }} onClick={() => window.scroll(0, document.getElementById('works-page')?.offsetTop)}>Proyectos</li>
                    {scrollY > 161 && <li style={{ color: colorContact }} onClick={() => window.scroll(0, document.getElementById('contact-page')?.offsetTop)}>Contáctame</li>}
                </ul>
            </section>
            <section className='logos-rss-container' >
                <div className='linkeding-logo' />
                <div className='github-logo' />
            </section>
            <p onClick={() => window.scroll(0, 0)} className="myName">davidfdzmorilla</p>
        </header>
    )
}