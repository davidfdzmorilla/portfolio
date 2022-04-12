import "./Skills.css"

export default function Skills({ scrollY }) {
    const softSkills = ['Flexibilidad', 'Trabajo en equipo', 'Responasbilidad', 'Actitud positiva', 'Gestión del tiempo', 'Empatia', 'Motivación', 'Resilencia']

    return (
        <article id='skills-page'>
            <h2>Mis Skills</h2>
            <article className="tecnologies-container">
                <h3>Tecnologías</h3>
                {scrollY + 700 > document.getElementById('skills-page')?.offsetTop &&
                    <>
                        <div className="skills__item">
                            <p>HTML5</p>
                            <div className="skills__bar skills__bar--80 blue animate"></div>
                        </div>
                        <div className="skills__item">
                            <p>CSS3</p>
                            <div className="skills__bar skills__bar--80 animate red"></div>
                        </div>
                        <div className="skills__item">
                            <p>JAVASCRIPT</p>
                            <div className="skills__bar skills__bar--70 orange animate"></div>
                        </div>
                        <div className="skills__item">
                            <p>NODEJS</p>
                            <div className="skills__bar skills__bar--60 violet animate"></div>
                        </div>
                        <div className="skills__item">
                            <p>REACT</p>
                            <div className="skills__bar skills__bar--70 green animate"></div>
                        </div>
                    </>
                }
            </article>
            <section className="skills-container">
                <article className="soft-skills">
                    <h3>Soft skills</h3>
                    {softSkills?.map(item => {
                        return <div className="soft-sklls-contain"><span></span><p>{item}</p></div>
                    })}
                </article>
            </section>
        </article>
    )
}