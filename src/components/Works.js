import "./Works.css"

const projectsList = [
    {
        title: 'INQUILINO PERFECTO',
        description: 'App de búsqueda y reserva de alojamientos con sistema de puntuación y notficaciones. Desarrollada con MERN stack.',
        urlImage: 'inquilino-perfecto.jpeg'
    },
    {
        title: 'NASA APP',
        description: 'App de visualización de contenido multiedia usando la API res de nasa.org. Desarrollada con REACTJS.',
        urlImage: 'nasa-app.jpeg'
    },
    {
        title: 'TODO LIST',
        description: 'Desarrollada con ReactJS.',
        urlImage: 'todolist.jpeg'
    },
]

export default function Works() {

    return (
        <article id='works-page'>
            <h2>Proyectos</h2>
            <section className="works-container">
                {projectsList?.map(project => {
                    return (
                        <article id={project.urlVideo} className="work-card">
                            <div className="header-card">
                                <span>{project.title}</span>
                                <div className="links-container">
                                    <a href="https://github.com/xocarva/inquilino-perfecto" target='_blank' rel="noreferrer nopener" className="repo-github">{ }</a>
                                    <a href="https://github.com/xocarva/inquilino-perfecto" target='_blank' rel="noreferrer nopener" className="link-logo">{ }</a>
                                    <a href="https://github.com/xocarva/inquilino-perfecto" target='_blank' rel="noreferrer nopener" className="video-logo">{ }</a>
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