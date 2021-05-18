import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import brennon from '../../images/brennon.jpg';
import style from './../../styles/components/resume/ResumeInfo.module.css';
import loading from '../../images/loading.gif';
import PDF from './../../assets/curriculo.pdf';

export default function ResumeInfo() {

    const [resume, setResume] = useState(null);
    const [images, setImages] = useState(null);

    useEffect(()=>{
        fetch('https://brennonaleatorioapi.herokuapp.com/resume').
        then(res => res.json())
        .then(
            (result) => {
              setResume(result);
              console.log(result)
            },
            (error) => {
              console.log(error)
            }
        )
    },[])

    if(!resume){
        return (
            <div className={style.loading}>
                <div>
                    <img src={loading} alt="Loading" />
                    <p>Carregando: Pode demorar!</p>
                </div>
            </div>
        );
    }

    return(
        <section id={style.resumeInfo}>
            <Element className="container" name="ResumeInfo">
                <h2>Currículo</h2>
                <div className={style.infos}>
                    <header className={style.profile}>
                        <div className={style.content}>
                            <h2>{resume.name}</h2>
                            <p>{resume.nationality}, {resume.state}, {resume.age} anos</p>
                            <p>E-Mail: {resume.email}</p>
                            <p>Telefone: {resume.number}</p>
                        </div>
                        <div className={style.image}><img src={brennon} alt="Brennon Gabriel de Oliveira"/></div>
                    </header>
                    <div className={style.body}>

                    <div className={style.wrapper}>
                            <h3>Objetivos</h3>
                            <p>{resume.goals}</p>
                        </div>

                        <div className={style.wrapper}>
                            <h3>Formação</h3>
                            <ul>
                                {
                                    resume.formation.map(val=><li>{val}</li>)
                                }
                            </ul>
                        </div>

                        <div className={style.wrapper}>
                            <h3>Experiência Profissional</h3>
                            <ul>
                                {
                                    resume.professionalExperience.map(val=>{
                                        
                                        return <li>{val.title}
                                            {val.office.map(val=><p>{val}</p>)}
                                        </li>
                                    })
                                }
                                
                            </ul>
                        </div>

                        <div className={style.wrapper}>
                            <h3>Qualificações e Atividades Complementares</h3>
                            <ul>
                                {
                                    resume.qualifications.map(val=><li>{val}</li>)
                                }
                            </ul>
                        </div>

                        <div className={style.wrapper}>
                            <h3>Informações Adicionais</h3>
                            <ul>
                                {resume.additionalInfos.map(val=><li>{val}</li>)}
                            </ul>
                        </div>

                        <div className={style.button}>
                            <a href='https://brennonaleatorioapi.herokuapp.com/resume/pdf' download="Currículo.pdf">Baixar em PDF</a>
                        </div>

                    </div>
                </div>
            </Element>
        </section>
    )
}