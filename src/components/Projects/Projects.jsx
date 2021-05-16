import React from 'react';
import { Element } from 'react-scroll';
import style from './../../styles/components/projects/MyProjects.module.css';
import brennon from '../../images/brennon.jpg';
import banner from '../../images/banner.jpg';

export default function MyProjects(){

    return(
        <section id={style.myProjects}>
            <Element name="MyProjects" className="container">
                <h2>Projetos</h2>
                <div className={style.projects}>

                    {/* <div className={style.wrapper}>
                        <img src={brennon} alt="" />
                        <div className={style.body}>
                            <h3>Dia da Mulheres</h3>
                            <p>Dedicado ao um dia tão especial - Feliz dia das mulheres</p>
                        </div>
                        <a href='#'>Acessar Site</a>
                    </div> */}

                </div>
            </Element>
        </section>
    )
}