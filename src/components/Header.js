import "./Header.css"


export default function Header({ scrollY }) {
    /* TODO
        Refactorizar con destructuring las variables de offsetTop
        Efecto menu :(
    */

    const colorDefault = 'rgb(197, 188, 188)'
    let colorAbout
    scrollY + 100 >= document.getElementById('about-page')?.offsetTop && scrollY <= (document.getElementById('about-page')?.offsetTop) + (document.getElementById('about-page')?.offsetHeight - 100 ) ? colorAbout = 'green' : colorAbout = colorDefault
    let colorSkills
    scrollY + 100 >= document.getElementById('skills-page')?.offsetTop && scrollY <= (document.getElementById('skills-page')?.offsetTop) + (document.getElementById('skills-page')?.offsetHeight - 100 ) ? colorSkills = 'green' : colorSkills = colorDefault
    let colorWorks
    scrollY + 100 >= document.getElementById('works-page')?.offsetTop && scrollY <= (document.getElementById('works-page')?.offsetTop) + (document.getElementById('works-page')?.offsetHeight - 100 ) ? colorWorks = 'green' : colorWorks = colorDefault
    let colorContact
    scrollY + 100 >= document.getElementById('contact-page')?.offsetTop && scrollY <= (document.getElementById('contact-page')?.offsetTop) + (document.getElementById('contact-page')?.offsetHeight - 100 ) ? colorContact = 'green' : colorContact = colorDefault
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
                <div className='gitlab-logo' />
                <div className='github-logo' />
            </section>
        </header>
    )
}