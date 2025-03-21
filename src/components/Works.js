import { AiFillGithub, AiOutlineLink, AiOutlineVideoCamera } from 'react-icons/ai';
import projectsList from '../data/works.json';
import './Works.css';

export default function Works() {
    return (
        <article id='works-page'>
            <h2>Proyectos</h2>
            
            <div className="projects-gallery">
                {projectsList?.map((project, index) => (
                    <div className="project-card" key={project.title}>
                        <div className="project-image">
                            <img src={project.urlImage} alt={project.title} />
                        </div>
                        
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            
                            <div className="project-tags">
                                {/* Extraer tecnologías de la descripción */}
                                {project.description.includes("MERN") && (
                                    <span className="project-tag">MERN Stack</span>
                                )}
                                {project.description.includes("React") && (
                                    <span className="project-tag">React</span>
                                )}
                                {project.description.toLowerCase().includes("api") && (
                                    <span className="project-tag">API</span>
                                )}
                                <span className="project-tag">Web</span>
                            </div>
                            
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-links">
                                <a
                                    href={project.urlRepo}
                                    target='_blank'
                                    rel="noreferrer noopener"
                                    className="project-link"
                                    aria-label="GitHub Repository"
                                >
                                    <AiFillGithub />
                                </a>
                                
                                {project.link && project.link.trim() !== " " && (
                                    <a
                                        href={project.link}
                                        target='_blank'
                                        rel="noreferrer noopener"
                                        className="project-link"
                                        aria-label="Live Demo"
                                    >
                                        <AiOutlineLink />
                                    </a>
                                )}
                                
                                {project.urlVideo && project.urlVideo.trim() !== " " && (
                                    <a
                                        href={project.urlVideo}
                                        target='_blank'
                                        rel="noreferrer noopener"
                                        className="project-link"
                                        aria-label="Video Demo"
                                    >
                                        <AiOutlineVideoCamera />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
}
