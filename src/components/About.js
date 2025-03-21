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
                <p>
                    Soy un desarrollador full stack apasionado por la tecnología y la innovación. Con experiencia en todo el stack de desarrollo, desde el frontend hasta infraestructura, me especializo en crear soluciones tecnológicas completas y escalables.
                    <br /><br />
                    <strong>Frontend</strong>
                    <br />
                    HTML5, CSS3, JavaScript (ES6+), React, Vue, Angular, Redux, Tailwind CSS, Material UI y Bootstrap.
                    <br /><br />
                    <strong>Backend</strong>
                    <br />
                    Node.js, PHP y Python con Express, Laravel, Django y Flask. Manejo librerías clave como Mongoose, Symfony, Blade y FastAPI.
                    <br /><br />
                    <strong>Bases de datos</strong>
                    <br />
                    MySQL, PostgreSQL, MongoDB y Redis, con experiencia en optimización y modelado de datos.
                    <br /><br />
                    <strong>DevOps e Infraestructura</strong>
                    <br />
                    Docker, Kubernetes, CI/CD, servidores Linux, Nginx, Apache, Traefik y diseño de redes seguras.
                    <br /><br />
                    <strong>Cloud</strong>
                    <br />
                    AWS (EC2, S3, Lambda), Azure, Google Cloud, arquitecturas serverless y automatización con Terraform.
                    <br /><br />
                    <strong>Inteligencia Artificial</strong>
                    <br />
                    Integración de APIs de modelos de lenguaje, implementación de soluciones ML/DL con TensorFlow y PyTorch.
                    <br /><br />
                    Me destaco por mi capacidad analítica, atención al detalle y aprendizaje rápido. Mi objetivo es crear sistemas eficientes y seguros que aporten valor real, siempre en constante actualización con las últimas tendencias tecnológicas.
                </p>
            </article>
            <section className="avatar-container">
                <div className="face-me"></div>
                <article className="hobbies-container">
                    <RiSailboatFill className="icon" />
                    <FaBicycle className="icon" />
                    <SiPioneerdj className="icon" />
                    <CgPiano className="icon" />
                    <GiSurferVan className="icon" />
                </article>
            </section>
        </article>
    )
}