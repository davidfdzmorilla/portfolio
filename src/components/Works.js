import { useState } from "react"
import "./Works.css"

const projectsList = [
    {
        title: 'Inquilino Perfecto',
        description: 'App de búsqueda de alojamientos desarrollada con MERN stack.',
        urlVideo: 'inquilinoPerfecto.mp4'
    },
    {
        title: 'TODO List.',
        description: 'App desarrollada con REACTJS.',
        urlVideo: 'TODO-list-video.mp4'
    },
    {
        title: 'Projecto 3.',
        description: 'Desarrollada con MERN stack.',
        urlVideo: 'inquilinoPerfecto.mp4'
    },
]

export default function Works() {
    const [stepProject, setStepProject] = useState(0)
    const perPageProjects = 1
    const pagsBookings = Math.ceil(projectsList?.length / perPageProjects)
    const handlePrevBookings = () => setStepProject(stepProject > 0 ? stepProject - 1 : pagsBookings - 1)
    const handleNextBookings = () => setStepProject((stepProject + 1) % pagsBookings)

    return (
        <article id='works-page'>
            <h2>Trabajos</h2>
            <section className="works-container">
                {projectsList?.slice(stepProject * perPageProjects, (stepProject + 1) * perPageProjects).map(project => {
                    return (
                        <article id={project.urlVideo} className="work-card">
                            <div className="links-container">
                                <a href="https://github.com/xocarva/inquilino-perfecto" target='_blank' rel="noreferrer nopener" className="repo-github">{}</a>
                                <a href="https://github.com/xocarva/inquilino-perfecto" target='_blank' rel="noreferrer nopener" className="link-logo">{}</a>
                            </div>
                            <video type='video/mp4' title="demo" width="100%" height="500px" src={project.urlVideo} autoPlay muted loop></video>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </article>)
                })}
            </section>
            {projectsList?.length > 0 && <section className='button-steps-container-projects'>
                <span className="prev-button" onClick={handlePrevBookings}>
                    ⬅️
                </span>
                <span>{stepProject + 1}/{Math.ceil(projectsList?.length / perPageProjects)}</span>
                <span className="next-button" onClick={handleNextBookings}>
                    ➡️
                </span>
            </section>}
        </article>
    )
}