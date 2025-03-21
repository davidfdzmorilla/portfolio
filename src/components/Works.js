import { AiFillGithub, AiOutlineLink, AiOutlineVideoCamera } from 'react-icons/ai';
import { motion } from 'framer-motion';
import projectsList from '../data/works.json';
import './Works.css';

export default function Works() {
    // Variantes para animación del contenedor
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    // Variantes para animación de cada proyecto
    const projectVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <article id='works-page'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
            >
                Proyectos
            </motion.h2>
            
            <motion.div 
                className="projects-gallery"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projectsList?.map((project, index) => (
                    <motion.div 
                        className="project-card" 
                        key={project.title}
                        variants={projectVariants}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    >
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
                    </motion.div>
                ))}
            </motion.div>
        </article>
    );
}
