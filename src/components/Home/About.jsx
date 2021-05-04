import React from 'react';
import brennon from '../../images/brennon.jpg';
import style from './../../styles/components/home/About.module.css';
import { Element } from 'react-scroll';

export default function About(){
    return(
        <section id={style.about}>
            <Element name="About" className="container">
                <div className={style.image}><img src={brennon} alt="Brennon Gabriel de Oliveira"/></div>
                <h2>Brennon Gabriel de Oliveira</h2>
                <p>Desenvolvedor independente de sites para alavancar o seu negócio!</p>
                <p>Com a crescente popularização da internet, é cada vez mais importante possuir um site para aumentar as visitas!</p>
                <p>Certificado em Front-End pela empresa Danki Code, produzo seu site com eficiência, baixo custo e com as melhores práticas de segurança e qualidade!</p>
            </Element>
        </section>
    )
}