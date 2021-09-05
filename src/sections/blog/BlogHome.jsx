import { useState } from "react";
import { useParams } from "react-router-dom";
import A from "../../components/A";
import Container from "../../components/Container";
import Title from "../../components/Title";
import style from "../../styles/sections/blog/BlogHome.module.scss";

export default function BlogHome() {
    const [topics, setTopics] = useState([
        {
            title: "Listas",
            pages: [
                {
                    title: "Guia de programação",
                    id: "guia-de-programacao",
                },
            ],
            topic: "listas",
        },
        {
            title: "Dicas",
            pages: [],
            topic: "dicas",
        },
    ]);

    const [postsList, setPostsList] = useState({
        "guia-de-programacao": [
            {
                title: "Aula 1 - Variáveis",
                id: "variaveis",
                data: "",
            },
        ],
    });
    const params = useParams();

    function returnTopics() {
        if (params.post) {
            let topicIndex = topics.findIndex(
                (val) => val.topic == params.topic
            );
            let topic = topics[topicIndex];
            let topicPostIndex = topic.pages.findIndex(
                (val) => val.id === params.post
            );
            let topicPost = topic.pages[topicPostIndex];
            let post = postsList[params.post];
            let rest = post.length % 3;

            let newTopics = [...post];
            if (rest !== 0) {
                for (let i = 0; i < 3 - rest; i++) {
                    newTopics.push({
                        title: "Em desenvolvimento",
                        id: "working",
                    });
                }
            }
            if (post.length === 0) {
                for (let i = 0; i < 3; i++) {
                    newTopics.push({
                        title: "Em desenvolvimento",
                        id: "working",
                    });
                }
            }
            return (
                <div className={style.topicContainer}>
                    <Title>{topicPost.title}:</Title>
                    <div className={style.blogsList}>
                        {newTopics.map((page) => {
                            return (
                                <A
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    to="Page"
                                    page={`blog/${params.topic}/${params.post}/${page.id}`}
                                    className={style.blogItem}
                                >
                                    <div className={style.overlay}></div>
                                    <h3>{page.title}</h3>
                                </A>
                            );
                        })}
                    </div>
                </div>
            );
        }
        if (params.topic) {
            let topicIndex = topics.findIndex(
                (val) => val.topic == params.topic
            );
            let topic = topics[topicIndex];
            let rest = topic.pages.length % 3;

            let newTopics = [...topic.pages];
            if (rest !== 0) {
                for (let i = 0; i < 3 - rest; i++) {
                    newTopics.push({
                        title: "Em desenvolvimento",
                        id: "working",
                    });
                }
            }
            if (topic.pages.length === 0) {
                for (let i = 0; i < 3; i++) {
                    newTopics.push({
                        title: "Em desenvolvimento",
                        id: "working",
                    });
                }
            }
            return (
                <div className={style.topicContainer}>
                    <Title>{topic.title}:</Title>
                    <div className={style.blogsList}>
                        {newTopics.map((page) => {
                            return (
                                <A
                                    spy={true}
                                    smooth={true}
                                    offset={-30}
                                    duration={500}
                                    to="Search"
                                    page={`blog/${topic.topic}/${page.id}`}
                                    className={style.blogItem}
                                >
                                    <div className={style.overlay}></div>
                                    <h3>{page.title}</h3>
                                </A>
                            );
                        })}
                    </div>
                </div>
            );
        }
        return (
            <>
                {topics.map((val) => {
                    let rest = val.pages.length % 3;

                    let newTopics = [...val.pages];
                    if (rest !== 0) {
                        for (let i = 0; i < 3 - rest; i++) {
                            newTopics.push({
                                title: "Em desenvolvimento",
                                id: "working",
                            });
                        }
                    }
                    if (val.pages.length === 0) {
                        for (let i = 0; i < 3; i++) {
                            newTopics.push({
                                title: "Em desenvolvimento",
                                id: "working",
                            });
                        }
                    }
                    return (
                        <div className={style.topicContainer}>
                            <Title>{val.title}:</Title>
                            <div className={style.blogsList}>
                                {newTopics.map((page, pageIndex) => {
                                    if (pageIndex < 3) {
                                        return (
                                            <A
                                                spy={true}
                                                smooth={true}
                                                offset={-30}
                                                duration={500}
                                                to="Search"
                                                page={`blog/${val.topic}/${page.id}`}
                                                className={style.blogItem}
                                            >
                                                <div
                                                    className={style.overlay}
                                                ></div>
                                                <h3>{page.title}</h3>
                                            </A>
                                        );
                                    }
                                })}
                            </div>
                            <A
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500}
                                to="Search"
                                page={`blog/${val.topic}`}
                            >
                                Ver mais
                            </A>
                        </div>
                    );
                })}
            </>
        );
    }

    return (
        <section id={style.blogHome}>
            <Container>{returnTopics()}</Container>
        </section>
    );
}
