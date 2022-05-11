import { AiFillGithub, AiOutlineLink, AiOutlineVideoCamera } from 'react-icons/ai';


import "./Works.css"

const projectsList = [
    {
        title: 'INQUILINO PERFECTO',
        description: 'App de búsqueda y reserva de alojamientos con sistema de puntuación y notificaciones. Desarrollada con MERN stack.',
        urlImage: 'inquilino-perfecto.jpeg',
        urlRepo: 'https://github.com/davidfdzmorilla/inquilino-perfecto',
        link: '',
        urlVideo: 'https://www.loom.com/share/8a7e5133f758463a9be4c1ad41e1c2fd'
    },
    {
        title: 'NASA APP',
        description: 'App de visualización de contenido multimedia usando la API pública nasa.org. Desarrollada con REACTJS.',
        urlImage: 'nasa-app.jpeg',
        urlRepo: 'https://github.com/davidfdzmorilla/nasa-api-res',
        link: 'https://nasaapp.davidfdzmorilla.dev/',
        urlVideo: ''
    },
    {
        title: 'TODO LIST',
        description: 'App Desarrollada con ReactJS y utilizando local-storage para guardar datos.',
        urlImage: 'todolist.jpeg',
        urlRepo: 'https://github.com/davidfdzmorilla/todo-list',
        link: 'https://todolist.davidfdzmorilla.dev/',
        urlVideo: 'https://www.loom.com/share/e5842fde11ca4d39bbd9affc6f75dd73'
    },
]

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