import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import A from "../../components/A";
import Container from "../../components/Container";
import Title from "../../components/Title";
import style from "../../styles/sections/blog/BlogHome.module.scss";
import { AppContext } from "../../context/AppContext";
import Blog from "../../classes/Blog";

export default function BlogHome() {
    const { blogData } = useContext(AppContext);
    const params = useParams();

    function returnTopics() {
        let blog = new Blog({ style, data: blogData });
        return blog.getTypeByRoute({ route: params });
    }

    return (
        <section id={style.blogHome}>
            <Container>{returnTopics()}</Container>
        </section>
    );
}
