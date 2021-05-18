import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import style from './../../styles/components/projects/MyProjects.module.css';
import loading from '../../images/loading.gif';

export default function MyProjects(){

    const [projects, setProjects] = useState(null);
    const [images, setImages] = useState(null);

    useEffect(()=>{
        fetch('https://brennonaleatorioapi.herokuapp.com/projects').
        then(res => res.json())
        .then(
            (result) => {
              setProjects(result);
            },
            (error) => {
              console.log(error)
            }
        )
    },[])

    if(!projects){
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
        <section id={style.myProjects}>
            <Element name="MyProjects" className="container">
                <h2>Projetos</h2>
                <div className={style.projects}>
                    {
                        projects.map((val, i)=>{
                            return <div className={style.wrapper}>
                                <img src={'https://brennonaleatorioapi.herokuapp.com/images/'+val.image} alt="" />
                                
                                <div className={style.body}>
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                                <a target="_blank" href={val.url}>Acessar Site</a>
                            </div>
                        })
                    }

                </div>
            </Element>
        </section>
    )
}