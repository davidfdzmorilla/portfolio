import { AiFillGithub, AiOutlineLink, AiOutlineVideoCamera } from 'react-icons/ai';
import projectsList from '../data/works.json'


import "./Works.css"



export default function Works() {

    return (
        <article id='works-page'>
            <h2>Proyectos</h2>
            <section className="works-container">
                {projectsList?.map(project => {
                    return (
                        <article key={Math.random()} id={project.urlVideo} className="work-card">
                            <div className="header-card">
                                <span>{project.title}</span>
                                <div className="links-container">
                                    <a href={project.urlRepo} target='_blank' rel="noreferrer nopener" className="logo"><AiFillGithub /></a>
                                    {project.link.length > 1 ? <a href={project.link} target='_blank' rel="noreferrer nopener" className="logo"><AiOutlineLink /></a> : ''}
                                    {project.urlVideo.length > 1 ? <a href={project.urlVideo} target='_blank' rel="noreferrer nopener" className="logo"><AiOutlineVideoCamera /></a> : ''}
                                </div>
                            </div>
                            <img src={project.urlImage} alt='project' />
                            <p>{project.description}</p>
                        </article>)
                })}
            </section>
        </article>
    )
}