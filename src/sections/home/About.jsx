import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Text from "../../components/Text";
import style from "../../styles/sections/About.module.scss";
import AboutSvg from "../../assets/images/About.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
    const [heightTitle, setHeightTitle] = useState();
    const [widthTitle, setWidthTitle] = useState();

    useEffect(() => {
        let bgText = document.querySelector(`.${style.bgText}`);
        setHeightTitle(bgText.offsetHeight);
        setWidthTitle(bgText.offsetWidth);
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <section id={style.about}>
            <Container>
                <div className={style.content} data-aos="fade-right">
                    <div
                        style={{ height: heightTitle, width: widthTitle }}
                        className={style.title}
                    >
                        <h3 className={style.bgText}>Sobre</h3>
                        <Title>Brennon Gabriel de Oliveira</Title>
                    </div>
                    <div>
                        <Text>
                            Desenvolvedor independente de sites para alavancar o
                            seu negócio!
                        </Text>
                        <Text>
                            Com a crescente popularização da internet, é cada
                            vez mais importante possuir um site para aumentar as
                            visitas!
                        </Text>
                        <Text>
                            Certificado em Front-End pela empresa Danki Code,
                            produzo seu site com eficiência, baixo custo e com
                            as melhores práticas de segurança e qualidade!
                        </Text>
                    </div>
                    <div className={style.links}>
                        <p>
                            E-Mail:{" "}
                            <a href="">contato@brennonaleatorio.com.br</a>
                        </p>
                        <p>
                            Telefone: <a href="">+55 (42) 99901-7838</a>
                        </p>
                    </div>
                </div>
                <div className={style.image}>
                    <img src={AboutSvg} alt="" />
                </div>
            </Container>
        </section>
    );
}
