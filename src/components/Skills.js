import "./Skills.css"

export default function Skills({ scrollY }) {
    const softSkills = ['Flexibilidad', 'Trabajo en equipo', 'Responasbilidad', 'Actitud positiva', 'Gestión del tiempo', 'Empatia', 'Motivación', 'Resilencia']

    return (
        <article id='skills-page'>
                <h2>Mis Skills</h2>
                <article className="soft-skills">
                    <h3>SOFT SKILLS</h3>
                    {softSkills?.map(item => {
                        return <p>🟢 {item}</p>
                    })}
                </article>
            <article className="tecnologies-container">
            <h3>HARD SKILLS</h3>
                {scrollY + 200 > document.getElementById('skills-page')?.offsetTop &&
                    <>
                        <div className="skills__item">
                            <p>HTML5</p>
                            <div className="skills__bar skills__bar--80 blue animate"></div>
                        </div>
                        <div className="skills__item">
                            <p>CSS3</p>
                            <div className="skills__bar skills__bar--90 animate red"></div>
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
        </article>
    )
}