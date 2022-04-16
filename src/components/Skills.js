import { SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact } from 'react-icons/si';

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
                            <SiHtml5 className='technologies-icon html-icon' />
                            <div className="skills__bar skills__bar--80 blue animate"></div>
                        </div>
                        <div className="skills__item">
                            <SiCss3 className='technologies-icon css-icon' />
                            <div className="skills__bar skills__bar--80 animate red"></div>
                        </div>
                        <div className="skills__item">
                            <SiJavascript className='technologies-icon js-icon' />
                            <div className="skills__bar skills__bar--70 orange animate"></div>
                        </div>
                        <div className="skills__item">
                            <SiNodedotjs className='technologies-icon node-icon' />
                            <div className="skills__bar skills__bar--60 violet animate"></div>
                        </div>
                        <div className="skills__item">
                            <SiReact className='technologies-icon react-icon' />
                            <div className="skills__bar skills__bar--70 green animate"></div>
                        </div>
                    </>
                }
            </article>
            <section className="skills-container">
                <article className="soft-skills">
                    <h3>Soft skills</h3>
                    {softSkills?.map(item => {
                        return <div key={Math.random()} className="soft-sklls-contain"><span></span><p>{item}</p></div>
                    })}
                </article>
            </section>
        </article>
    )
}