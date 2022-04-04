import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

import "./Home.css"

export default function Home() {
    const [scrollY, setScrolly] = useState(null)
    window.onscroll = function() {
        let y = window.scrollY
        setScrolly(y)
    }
    return (
        <section className='home-page'>
            <Header scrollY={scrollY} />
            <Main scrollY={scrollY} />
        </section>
    )
}