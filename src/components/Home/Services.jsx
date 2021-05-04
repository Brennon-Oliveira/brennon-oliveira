import React, { useState } from 'react';
import Service from './../Service';
import style from './../../styles/components/home/Services.module.css';

export default function Services(){

    const [services, setServices] = useState([
        'Landing Pages para anunciar o seu negócio',
        'Site de vendas para o seu negócio',
        'Páginas promocionais para divulgar seu trabalho',
        'Sites pessoais para você que sempre desejou',
        'Sistema de estoque e armazenamento',
        'E-Mail Marketing para fidelizar seus clientes',
        'Google ads e outras formas de alavancar o seu site',
    ])

    return(
        <section id={style.services}>
            <div className="container">
                <h2>Serviços</h2>
                <div className={style.servicesContainer}>
                    {
                        services.map((val, i)=>{
                            if(i == services.length-1){
                                return <Service text={val} id={i+1} last={true}/>
                            } else {
                                return <Service text={val} id={i+1} last={false}/>;
                            }
                        })

                    }
                    
                </div>
            </div>
        </section>
    )
}