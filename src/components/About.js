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
                <p>Aunque siempre me fascinó el mundo de la programación y el desarrollo, mi vida laboral siempre estuvo ligada  al sector Marítimo-Pesquero.
                    En estos momentos me encuentro aprovechando la oportunidad de fusionar una pasión con una carrera laboral. Creo que es muy importante disfrutar con tu trabajo y conmigo el desarrollo lo consigue día a día.
                    Soy una persona creativa, con una fuerte orientación al logro y sobre todo comprometido a seguir aprendiendo para poder resolver proyectos cada vez más complejos.</p>
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