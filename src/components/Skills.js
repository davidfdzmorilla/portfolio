import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiPhp, SiPython } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import "./Skills.css"

export default function Skills({ scrollY }) {
    // Estado para controlar si las tecnologías deben mostrarse
    const [showTechnologies, setShowTechnologies] = useState(false);
    const skillsRef = useRef(null);
    
    // Comprobar si debemos mostrar las tecnologías basado en la posición del scroll
    useEffect(() => {
        if (skillsRef.current && scrollY + 700 > skillsRef.current.offsetTop) {
            setShowTechnologies(true);
        }
    }, [scrollY]); // Este efecto se ejecuta cada vez que scrollY cambia

    const softSkills = [
        'Flexibilidad', 
        'Trabajo en equipo', 
        'Responsabilidad', 
        'Actitud positiva', 
        'Gestión del tiempo', 
        'Empatía', 
        'Motivación', 
        'Resiliencia'
    ];

    // Animación para los contenedores
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    // Animación para cada elemento de la skill
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    // Forzar una reanimación de las barras de skills si es necesario
    const forceAnimation = () => {
        const skillBars = document.querySelectorAll('.skills__bar');
        skillBars.forEach(bar => {
            bar.classList.remove('animate');
            // Forzar un repaint
            void bar.offsetWidth;
            bar.classList.add('animate');
        });
    };

    // Aplicar la animación cuando el componente se monte o cuando showTechnologies cambie
    useEffect(() => {
        if (showTechnologies) {
            // Dar un pequeño tiempo para que el DOM se actualice
            setTimeout(forceAnimation, 100);
        }
    }, [showTechnologies]);

    return (
        <article id='skills-page' ref={skillsRef}>
            <h2>Mis Skills</h2>
            
            <section className="skills-container">
                <motion.article 
                    className="tecnologies-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <h3>Tecnologías</h3>
                    
                    {showTechnologies && (
                        <>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiHtml5 className='technologies-icon html-icon' />
                                <div className="skills__bar skills__bar--90 blue animate"></div>
                            </motion.div>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiCss3 className='technologies-icon css-icon' />
                                <div className="skills__bar skills__bar--85 red animate"></div>
                            </motion.div>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiJavascript className='technologies-icon js-icon' />
                                <div className="skills__bar skills__bar--90 orange animate"></div>
                            </motion.div>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiNodedotjs className='technologies-icon node-icon' />
                                <div className="skills__bar skills__bar--90 violet animate"></div>
                            </motion.div>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiReact className='technologies-icon react-icon' />
                                <div className="skills__bar skills__bar--90 green animate"></div>
                            </motion.div>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiPhp className='technologies-icon php-icon' />
                                <div className="skills__bar skills__bar--90 php-color animate"></div>
                            </motion.div>
                            <motion.div className="skills__item" variants={itemVariants}>
                                <SiPython className='technologies-icon python-icon' />
                                <div className="skills__bar skills__bar--80 python-color animate"></div>
                            </motion.div>
                        </>
                    )}
                </motion.article>
                
                <motion.article 
                    className="soft-skills"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <h3>Soft skills</h3>
                    <div className="soft-skills-grid">
                        {softSkills?.map(item => (
                            <motion.div 
                                key={item} 
                                className="soft-sklls-contain"
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.03 }}
                            >
                                <span></span>
                                <p>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.article>
            </section>
        </article>
    )
}