import A from "../../components/A";
import Container from "../../components/Container";
import style from "../../styles/sections/blog/Navigation.module.scss";
import { useParams } from "react-router-dom";

export default function Navigation() {
    const params = useParams();

    if (params.topic) {
        if (params.post) {
            return (
                <section id={style.navigation}>
                    <Container>
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog`}
                            className={style.navigationLink}
                        >
                            blog
                            <div></div>
                        </A>{" "}
                        <span>&rArr;</span>{" "}
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog/${params.topic}`}
                            className={style.navigationLink}
                        >
                            {params.topic}
                            <div></div>
                        </A>{" "}
                        <span>&rArr;</span>{" "}
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog/${params.topic}/${params.page}`}
                            className={style.navigationLink}
                        >
                            {params.page}
                            <div></div>
                        </A>
                        <span>&rArr;</span>{" "}
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Page"
                            page={`blog/${params.topic}/${params.page}/${params.post}`}
                            className={style.navigationLink}
                        >
                            {params.post}
                            <div></div>
                        </A>
                    </Container>
                </section>
            );
        }
        if (params.page) {
            return (
                <section id={style.navigation}>
                    <Container>
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog`}
                            className={style.navigationLink}
                        >
                            blog
                            <div></div>
                        </A>{" "}
                        <span>&rArr;</span>{" "}
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog/${params.topic}`}
                            className={style.navigationLink}
                        >
                            {params.topic}
                            <div></div>
                        </A>{" "}
                        <span>&rArr;</span>{" "}
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog/${params.topic}/${params.page}`}
                            className={style.navigationLink}
                        >
                            {params.page}
                            <div></div>
                        </A>
                    </Container>
                </section>
            );
        } else {
            return (
                <section id={style.navigation}>
                    <Container>
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog`}
                            className={style.navigationLink}
                        >
                            blog
                            <div></div>
                        </A>{" "}
                        <span>&rArr;</span>{" "}
                        <A
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                            to="Search"
                            page={`blog/${params.topic}`}
                            className={style.navigationLink}
                        >
                            {params.topic}
                            <div></div>
                        </A>
                    </Container>
                </section>
            );
        }
    } else {
        return <></>;
    }
}
