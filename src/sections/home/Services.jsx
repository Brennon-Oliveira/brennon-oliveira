import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Text from "../../components/Text";
import style from "../../styles/sections/Services.module.scss";
import ServicesSvg from "../../assets/images/Services.svg";
import Link from "../../components/Link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Services() {
    const [heightTitle, setHeightTitle] = useState();
    const [widthTitle, setWidthTitle] = useState();

    useEffect(() => {
        let bgText = document.querySelector(`.${style.bgText}`);
        setHeightTitle(bgText.offsetHeight);
        setWidthTitle(bgText.offsetWidth);
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <section id={style.services}>
            <Container>
                <div className={style.content} data-aos="fade-left">
                    <div
                        style={{ height: heightTitle, width: widthTitle }}
                        className={style.title}
                    >
                        <h3 className={style.bgText}>Serviços</h3>
                        <Title>Inúmeras funcionalidades</Title>
                    </div>
                    <div>
                        <Text>
                            Esse site também possuiu diversas ferramentas
                            gratuitas a disposição, para quem precisar.
                        </Text>
                        <Text>
                            Para o mantimento do projeto, alguns anúncios serão
                            mostrados nas telas de ferramentas.
                        </Text>
                        <Text>
                            Caso queira apoiar o desenvolvedor, pode doar
                            qualquer quantia apertando no botão abaixo
                        </Text>
                    </div>
                    <div className={style.buttons}>
                        <Link>Ferramentas</Link>
                        <Link>Doar</Link>
                    </div>
                </div>
                <div className={style.image}>
                    <img src={ServicesSvg} alt="" />
                </div>
            </Container>
        </section>
    );
}
