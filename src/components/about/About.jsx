import React from 'react';
import "./about.css";
import AboutImg from "../../assets/foto.jpg"
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title"> About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />

                <p className="about__description">Como Front-End Developer, estou sempre imerso no universo das tecnologias da web, buscando aprender e aprimorar minhas habilidades constantemente. Ao longo da minha jornada, tive o prazer de criar projetos significativos, desde clássicos clones do Twitter e YouTube até uma plataforma inovadora de food-commerce.</p>

            </div>
        </div>
    </section>
  )
}

export default About
