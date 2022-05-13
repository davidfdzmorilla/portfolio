import { motion } from 'framer-motion'
import { BsFillFileArrowUpFill } from 'react-icons/bs';
import About from './About'
import Contact from './Contact'
import Landing from './Landing'
import Skills from './Skills'
import Works from './Works'

import './Main.css'
import { CvComponent } from './CvComponent';

export default function Main({ scrollY }) {
    const handleClickScrollUp = () => {
        window.scroll(0, document.getElementById('presentation-page')?.offsetTop)
    }

    return (
        <main id='main'>
            <CvComponent />
            <section>
                <div className='buttons-scroll-conatiner'>
                    {scrollY > 80 &&
                        <motion.span
                            onClick={handleClickScrollUp}
                            className='up-button'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsFillFileArrowUpFill />
                        </motion.span>}
                </div>
            </section>
            <Landing scrollY={scrollY} />
            <About />
            <Skills scrollY={scrollY} />
            <Works />
            <Contact scrollY={scrollY} />
        </main>
    )
}


