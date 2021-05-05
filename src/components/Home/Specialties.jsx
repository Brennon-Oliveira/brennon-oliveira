import React, { useState } from 'react';
import style from './../../styles/components/home/Specialties.module.css';
import Specialty from './../Specialty';
//images
import htmlBanner from './../../images/specialties/htmlBanner.jpg'
import cssBanner from './../../images/specialties/cssBanner.jpg'
import jsBanner from './../../images/specialties/javascriptBanner.jpg'
import phpBanner from './../../images/specialties/phpBanner.jpg'
import mysqlBanner from './../../images/specialties/mysqlBanner.jpg'
import webDesingBanner from './../../images/specialties/webDesingBanner.jpg'
import { Element } from 'react-scroll';

export default function Specialties(){

    const [specialties, setSpecialties] = useState([
        {title:'HTML5',icon:'fab fa-html5', image:htmlBanner,text:'Sites desenvolvidos em HTML5 com boas praticas e compatíveis com todos os navegadores!'},
        {title:'CSS3',icon:'fab fa-css3-alt', image:cssBanner,text:'Sites estilizados e com um design ótimo para tudo que precisar com o CSS3!'},
        {title:'JavaScript',icon:'fab fa-js', image:jsBanner,text:'Site dinâmico com interatividade e ótima experiência para o usuário usando o JavaScript!'},
        {title:'PHP',icon:'fab fa-php', image:phpBanner,text:'Sistemas seguros e completos no servidor usando PHP!'},
        {title:'MySql',icon:'fas fa-database', image:mysqlBanner,text:'Banco de dados eficiente e completo para armazenar informações!'},
        {title:'Web Desing',icon:'fas fa-paint-brush', image:webDesingBanner,text:'Sites estilosos criados a cara da sua marca!'},
    ])

    return(
        <section id={style.specialties}>
            <Element name="Specialties" className="container">
                <h2>Especialidades</h2>
                <div className={style.specialtiesContainer}>
                    {
                        specialties.map((val)=>{
                            return <Specialty title={val.title} icon={val.icon} image={val.image} text={val.text} />
                        })
                    }
                    
                </div>
            </Element>
        </section>
    )
}