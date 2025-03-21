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
                    Soy un DevOps Engineer con sólidos conocimientos full-stack, especializado en implementar y gestionar infraestructuras cloud escalables y soluciones de automatización. Mi experiencia abarca desde el diseño de arquitecturas cloud hasta la implementación de pipelines CI/CD y el desarrollo de aplicaciones modernas.
                    <br /><br />
                    <strong>DevOps e Infraestructura</strong>
                    <br />
                    Docker, Kubernetes, CI/CD, servidores Linux, Nginx, Apache, Traefik y diseño de redes seguras. Especializado en automatización de infraestructura y despliegues continuos.
                    <br /><br />
                    <strong>Cloud</strong>
                    <br />
                    AWS (EC2, S3, Lambda), Azure, Google Cloud, arquitecturas serverless y automatización con Terraform. Certificado en AWS Academy Cloud Operations y AWS Academy Cloud Architecting.
                    <br /><br />
                    <strong>Frontend</strong>
                    <br />
                    HTML5, CSS3, JavaScript (ES6+), React, Vue, Angular, Redux, Tailwind CSS, Material UI y Bootstrap.
                    <br /><br />
                    <strong>Backend</strong>
                    <br />
                    Node.js, PHP y Python con Express, Laravel, Django y Flask. Manejo librerías clave como Mongoose, Symfony, Blade y FastAPI. Desarrollo de plugins personalizados para WordPress.
                    <br /><br />
                    <strong>Bases de datos</strong>
                    <br />
                    MySQL, PostgreSQL, MongoDB y Redis, con experiencia en optimización y modelado de datos.
                    <br /><br />
                    <strong>Inteligencia Artificial</strong>
                    <br />
                    Integración de APIs de modelos de lenguaje, implementación de soluciones ML/DL con TensorFlow y PyTorch.
                    <br /><br />
                    <strong>Marketing Digital</strong>
                    <br />
                    Certificado en Google Analytics. Amplios conocimientos en SEO y optimización web para motores de búsqueda. Implementación de estrategias de análisis de datos para mejorar el rendimiento web.
                    <br /><br />
                    Me destaco por implementar soluciones que optimizan el ciclo de vida del desarrollo de software, garantizando despliegues eficientes, escalabilidad y alta disponibilidad. Mi enfoque se centra en crear infraestructuras robustas y seguras que potencien el valor empresarial.
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