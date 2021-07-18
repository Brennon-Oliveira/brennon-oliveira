import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import style from "./../../styles/components/projects/MyProjects.module.css";
import loading from "../../images/loading.gif";

export default function MyProjects() {
    const [projects, setProjects] = useState(null);
    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then((res) => res.json())
            .then(
                (result) => {
                    setProjects(result.data);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    function toBase64(arr) {
        //arr = new Uint8Array(arr) if it's an ArrayBuffer
        console.log(arr);
        return btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
        );
    }

    if (!projects) {
        return (
            <div className={style.loading}>
                <div>
                    <img src={loading} alt="Loading" />
                    <p>Carregando: Pode demorar!</p>
                </div>
            </div>
        );
    }

    return (
        <section id={style.myProjects}>
            <Element name="MyProjects" className="container">
                <h2>Projetos</h2>
                <div className={style.projects}>
                    {projects.map((val, i) => {
                        console.log(toBase64(val.picture.data));
                        return (
                            <div className={style.wrapper}>
                                <img
                                    src={`data:image/jpeg;base64,${toBase64(
                                        val.picture.data
                                    )}`}
                                    alt=""
                                />

                                <div className={style.body}>
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                                <a target="_blank" href={val.url}>
                                    Acessar Site
                                </a>
                            </div>
                        );
                    })}
                </div>
            </Element>
        </section>
    );
}
