import React from 'react';
import './portfolio.css';
import PROJECT1 from '../../assets/Projeto_tt.PNG';
import PROJECT2 from '../../assets/Projeto_chatgpt.PNG';
import PROJECT3 from '../../assets/Projeto_food_commerce.PNG';
import PROJECT4 from '../../assets/projeto_youtube_clone.PNG';


const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio section'>
        <h2 className="section__title"> Portfolio</h2>
        <span className="section__subtitle">My recent projects</span>

        <div className="container portfolio__container">

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PROJECT3} alt="" />
                </div>
                <h3>Food Commerce</h3>
                <a href="https://github.com/daviscatpires/food-commerce" className="button button--flex">GitHub</a>
                <a href="https://food-commerce-daviscatpires.vercel.app/ " className="button button--flex" target='blank'>Live Demo</a>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PROJECT4} alt="" />
                </div>
                <h3>Youtube Clone</h3>
                <a href="https://github.com/daviscatpires/Youtube-Clone" className="button button--flex">GitHub</a>
                <a href="https://youtube-clone-eta-two.vercel.app/" className="button button--flex" target='blank'>Live Demo</a>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PROJECT2} alt="" />
                </div>
                <h3>Projeto ChatGPT</h3>
                <a href="https://github.com/daviscatpires/React-about-gpt3" className="button button--flex">GitHub</a>
                <a href="https://react-about-gpt3.vercel.app/" className="button button--flex" target='blank'>Live Demo</a>
            </article>

            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={PROJECT1} alt="" />
                </div>
                <h3>Clone Twitter</h3>
                <a href="https://github.com/daviscatpires/Clo-tt-DIO" className="button button--flex">GitHub</a>
                <a href="https://clo-tt-dio.vercel.app/" className="button button--flex" target='blank'>Live Demo</a>
            </article>

        </div>
    </section>
  )
}

export default Portfolio
