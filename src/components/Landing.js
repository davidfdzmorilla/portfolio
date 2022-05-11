import Typewriter from "typewriter-effect"

import "./Landing.css"

export default function Landing({ scrollY }) {
    let classNameForContactButtonPosition
    scrollY > 161 ? classNameForContactButtonPosition = '-header' : classNameForContactButtonPosition = '-landing'
    return (
        <section id='presentation-page'>
            <article className='message-container'>
                <Typewriter className='typewrite-effect'
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .typeString('Hola!<br/>Soy David,<br/>desarrollador web.')
                            .start();
                    }}
                />
            </article>
            <p>Full-stack Web Developer</p>
            <span className={'contact-button' + classNameForContactButtonPosition} onClick={() => window.scroll(0, document.getElementById('contact-page')?.offsetTop)}>Contáctame!</span>
        </section>
    )
}