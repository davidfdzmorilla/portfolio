import { AiFillGithub, AiOutlineLink, AiOutlineVideoCamera } from 'react-icons/ai';
import projectsList from '../data/works.json';
import './Works.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Works() {
    return (
        <article id='works-page'>
            <h2>Proyectos</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 1 : 2}
                spaceBetween={20} // Mostrar más de una tarjeta en pantallas más grandes
                coverflowEffect={{
                    rotate: 30,
                    stretch: 10,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {projectsList?.map(project => (
                    <SwiperSlide key={project.title}>
                        <article id={project.urlVideo} className="work-card">
                            <div className="header-card">
                                <span>{project.title}</span>
                                <div className="links-container">
                                    <a
                                        href={project.urlRepo}
                                        target='_blank'
                                        rel="noreferrer noopener"
                                        className="logo"
                                    >
                                        <AiFillGithub />
                                    </a>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target='_blank'
                                            rel="noreferrer noopener"
                                            className="logo"
                                        >
                                            <AiOutlineLink />
                                        </a>
                                    )}
                                    {project.urlVideo && (
                                        <a
                                            href={project.urlVideo}
                                            target='_blank'
                                            rel="noreferrer noopener"
                                            className="logo"
                                        >
                                            <AiOutlineVideoCamera />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <img src={project.urlImage} alt='project' />
                            <p>{project.description}</p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </article>
    );
}
