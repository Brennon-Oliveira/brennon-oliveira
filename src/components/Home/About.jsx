import React from 'react';
import brennon from '../../images/brennon.jpg';

export default function About(){
    return(
        <section>
            <div className="image"><img src={brennon} alt="Brennon Gabriel de Oliveira"/></div>
            <h2>Brennon Gabriel de Oliveira</h2>
            <p>Desenvolvedor independente de sites para alavancar o seu negócio!</p>
            <p>Com a crescente popularização da internet, é cada vez mais importante possuir um site para aumentar as visitas!</p>
            <p>Certificado em Front-End pela empresa Danki Code, produzo seu site com eficiência, baixo custo e com as melhores práticas de segurança e qualidade!</p>
        </section>
    )
}