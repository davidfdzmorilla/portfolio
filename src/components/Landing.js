import Typewriter from "typewriter-effect"

import "./Landing.css"

export default function Landing({ scrollY }) {
    const buttonClassName = scrollY > 161 ? 'contact-button-header' : 'contact-button-landing';
    
    return (
        <section id='presentation-page'>
            <article className='message-container'>
                <Typewriter className='typewrite-effect'
                    onInit={(typewriter) => {
                        typewriter
                            .pauseFor(1000)
                            .typeString('Hola!<br/>Soy <span>David</span>,<br/>desarrollador web.')
                            .start();
                    }}
                />
            </article>
            <p>Full-stack Web Developer</p>
            <button 
                className={buttonClassName} 
                onClick={() => window.scroll(0, document.getElementById('contact-page')?.offsetTop)}
            >
                Contáctame!
            </button>
        </section>
    )
}