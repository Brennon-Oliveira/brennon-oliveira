import style from "../../styles/sections/Projects.module.scss";
import Title from "../../components/Title";
import Container from "../../components/Container";
import Text from "../../components/Text";
import brennonaleatorio from "../../assets/images/brennonaleatorio.jpeg";
import hilbertfirearms from "../../assets/images/hilbertfirearms.jpeg";
import hogwartshmrpg from "../../assets/images/hogwartshmrpg.jpeg";
import littleinvest from "../../assets/images/littleinvest.jpeg";
import DiaDaMulher from "../../assets/images/DiaDaMulher.jpeg";
import Monguilhott from "../../assets/images/Monguilhott.jpeg";
import { useState } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([
        {
            url: "https://brennonaleatorio.com.br",
            image: brennonaleatorio,
            title: "Brennon Oliveira - Web Development",
            description:
                "Você que precisa de um site profissional para o seu negócio, temos oque você precisa!",
        },
        {
            url: "https://www.hilbertfirearms.com.br/",
            image: hilbertfirearms,
            title: "Hilbert Fire Arms",
            description: "Site ainda sem descrição",
        },
        {
            url: "https://hogwartshmrpg.netlify.app/",
            image: hogwartshmrpg,
            title: "Hogwart HM - RPG",
            description: "Venha participar do melhor RPG de Harry Potter",
        },
        {
            url: "http://projetos.brennonaleatorio.com.br/little-invest/",
            image: littleinvest,
            title: "Little Invest - Invista no seu futuro",
            description: "Little Invest - Invista no seu futuro",
        },
        {
            url: "http://projetos.brennonaleatorio.com.br/DiaDaMulher/",
            image: DiaDaMulher,
            title: "Dia da Mulheres",
            description: "Dedicado a um dia tão especial",
        },
        {
            url: "http://projetos.brennonaleatorio.com.br/Monguilhott/",
            image: Monguilhott,
            title: "Monguilhott",
            description:
                "Seu sorriso perfeito através de um tratamento discreto e inovador, em Florianópolis.",
        },
    ]);

    function redirectToProject(url) {
        window.open(url, "_blank");
    }

    return (
        <section id={style.projects}>
            <Container>
                <Title>Projetos</Title>
                <div className={style.projectsContainer}>
                    {projects.map((val) => {
                        return (
                            <div
                                onClick={() => {
                                    redirectToProject(val.url);
                                }}
                                className={style.wrapper}
                                style={{
                                    backgroundImage: `url('${val.image}')`,
                                }}
                            >
                                <div className={style.overlay}></div>
                                <h3>{val.title}</h3>
                                <Text>{val.description}</Text>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
