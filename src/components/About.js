import "./About.css"



export default function About() {
    return (
        <article id='about-page'>
            <article className='content'>
            <h2>Este soy yo</h2>
                <div><span>p</span><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour.</p><span>p</span></div>
            </article>
            <section>
                <div className="face-me" />
            <article className="hobbies-container">
                <div className="tocadiscos-image"/>
                <div className="synthe-image"/>
                <div className="timon-image"/>
                <div className="mtb-image"/>
                <div className="surf-image"/>
            </article>
            </section>
        </article>
    )
}