import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import Container from "../../components/Container";
import Blog from "../../pages/Blog";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Navigation from "./Navigation";
import style from "../../styles/sections/blog/Page.module.scss";
import Text from "../../components/Text";

export default function Page({ data }) {
    const [postData, setPostData] = useState(data || "");
    const [isList, setIsList] = useState(["listas"]);

    const params = useParams();

    if (isList.includes(params.topic) && !params.class) {
        return <Blog />;
    }

    if (data) {
        return (
            <section id={style.page}>
                <Container name="Page">
                    <Navigation />
                    <Container min className={style.postDataContainer}>
                        {postData}
                    </Container>
                </Container>
            </section>
        );
    }

    return <Blog />;
}
