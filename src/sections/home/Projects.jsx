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
            image: "brennonaleatorio.png",
        },
        {
            url: "https://www.hilbertfirearms.com.br/",
            image: "hilbertfirearms.png",
        },
        {
            url: "https://hogwartshmrpg.netlify.app/",
            image: "hogwartshmrpg.png",
        },
        {
            url: "http://projetos.brennonaleatorio.com.br/little-invest/",
            image: "littleinvest.png",
        },
        {
            url: "http://projetos.brennonaleatorio.com.br/DiaDaMulher/",
            image: "DiaDaMulher.png",
        },
        {
            url: "http://projetos.brennonaleatorio.com.br/Monguilhott/",
            image: "Monguilhott.png",
        },
    ]);

    return (
        <section id={style.projects}>
            <Container>
                <Title>Projetos</Title>
                <div className={style.projectsContainer}>
                    <div
                        className={style.wrapper}
                        style={{ backgroundImage: `url('${teste1}')` }}
                    >
                        <div className={style.overlay}></div>
                        <h3>Hogwart HM - RPG</h3>
                        <Text>
                            Venha participar do melhor RPG de Harry Potter
                        </Text>
                    </div>
                    <div
                        className={style.wrapper}
                        style={{ backgroundImage: `url('${teste2}')` }}
                    >
                        <div className={style.overlay}></div>
                        <h3>Hogwart HM - RPG</h3>
                        <Text>
                            Venha participar do melhor RPG de Harry Potter
                        </Text>
                    </div>
                    <div
                        className={style.wrapper}
                        style={{ backgroundImage: `url('${teste3}')` }}
                    >
                        <div className={style.overlay}></div>
                        <h3>Hogwart HM - RPG</h3>
                        <Text>
                            Venha participar do melhor RPG de Harry Potter
                        </Text>
                    </div>
                    <div
                        className={style.wrapper}
                        style={{ backgroundImage: `url('${teste3}')` }}
                    >
                        <div className={style.overlay}></div>
                        <h3>Hogwart HM - RPG</h3>
                        <Text>
                            Venha participar do melhor RPG de Harry Potter
                        </Text>
                    </div>
                    <div
                        className={style.wrapper}
                        style={{ backgroundImage: `url('${teste1}')` }}
                    >
                        <div className={style.overlay}></div>
                        <h3>Hogwart HM - RPG</h3>
                        <Text>
                            Venha participar do melhor RPG de Harry Potter
                        </Text>
                    </div>
                    <div
                        className={style.wrapper}
                        style={{ backgroundImage: `url('${teste2}')` }}
                    >
                        <div className={style.overlay}></div>
                        <h3>Hogwart HM - RPG</h3>
                        <Text>
                            Venha participar do melhor RPG de Harry Potter
                        </Text>
                    </div>
                </div>
            </Container>
        </section>
    );
}
