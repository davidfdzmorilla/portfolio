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
                <p>Soy un desarrollador full stack con habilidades en HTM, CSS, JavaScript, Node.js, MySQL, PHP, Python, Docker, Nginx y Traefik. Mi experiencia en el desarrollo web me permite abordar proyectos de manera eficiente y asegurar la escalabilidad, disponibilidad y seguridad de las aplicaciones en entornos de producción. Busco constantemente mejorar mis habilidades y estar actualizado en las últimas tendencias y tecnologías. Soy dedicado y apasionado con un enfoque en la calidad y la atención al detalle en cada proyecto que entrego. Estoy comprometido a entregar soluciones de alta calidad y ampliar mis conocimientos.</p>
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