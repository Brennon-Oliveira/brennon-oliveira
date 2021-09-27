import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import Container from "../../components/Container";
import Blog from "../../pages/Blog";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Navigation from "./Navigation";
import _style from "../../styles/sections/blog/Page.module.scss";
import Text from "../../components/Text";

export default function Post({ data }) {
    const [_data, setData] = useState(data);

    return (
        <section id={_style.page}>
            <Container name="Page">
                <Container min className={_style.postDataContainer}>
                    {_data?.data ? (
                        <>
                            <Title>{_data.title}</Title>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: _data.data,
                                }}
                            ></div>
                        </>
                    ) : (
                        <Text>Em desenvolvimento</Text>
                    )}
                </Container>
            </Container>
        </section>
    );
}
