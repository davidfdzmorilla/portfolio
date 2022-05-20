import { FaBicycle } from 'react-icons/fa';
import { SiPioneerdj } from 'react-icons/si';
import { CgPiano } from 'react-icons/cg';
import { RiSailboatFill } from 'react-icons/ri';
import { GiSurferVan } from 'react-icons/gi';
import "./About.css"



export default function About() {
    return (
        <article id='about-page'>
            <article className='content'>
                <h2>Este soy yo</h2>
                <p>Me llamo David y con 42 años busco mi primer empleo como desarrollador 💻.
                    Después de una carrera de casi 20 años en el sector marítimo 🚢, decidí prepararme para ser desarrollador, algo que siempre me fascinó 😲.
                    Me encanta JavaScript y todo lo relacinado con la parte Frontend del desarrollo de aplicaciones web, donde sigo formándome y especializándome.
                    Me considero una persona a la que le gusta trabajar en equipo 🦾 y comprometida a seguir aprendiendo 📚 para poder resolver proyectos cada vez más complejos.</p>
            </article>
            <section className="avatar-container">
                <div className="face-me" />
                <article className="hobbies-container">
                    <RiSailboatFill color='black' className="icon" />
                    <FaBicycle color='black' className="icon" />
                    <SiPioneerdj color='black' className="icon" />
                    <CgPiano color='black' className="icon" />
                    <GiSurferVan color='black' className="icon" />
                </article>
            </section>
        </article>
    )
}