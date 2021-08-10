import style from "../../styles/sections/Specialties.module.scss";
import Title from "../../components/Title";
import Container from "../../components/Container";
import Text from "../../components/Text";
import { useEffect, useState } from "react";

export default function Specialties() {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        setSpecialties([
            {
                icon: "fab fa-html5",
                title: "HTML",
                content:
                    "Sites desenvolvidos em HTML5 com boas praticas e compatíveis com todos os navegadores!",
            },
            {
                icon: "fab fa-css3-alt",
                title: "CSS3",
                content:
                    "Sites estilizados e com um design ótimo para tudo que precisar com o CSS3!",
            },
            {
                icon: "fab fa-js",
                title: "JavaScript",
                content:
                    "Site dinâmico com interatividade e ótima experiência para o usuário usando o JavaScript!",
            },
            {
                icon: "fab fa-react",
                title: "ReactJS",
                content: "Sites dinâmicos e completos para seus trabalhos!",
            },
            {
                icon: "fab fa-node-js",
                title: "NodeJS",
                content: "Servidores dedicados e rápidos com NodeJS",
            },
            {
                icon: "fas fa-mobile-alt",
                title: "React Native",
                content: "Aplicações mobile nativas com React Native!",
            },
            {
                icon: "fab fa-php",
                title: "PHP",
                content: "Sistemas seguros e completos no servidor usando PHP!",
            },
            {
                icon: "fas fa-database",
                title: "Database",
                content:
                    "Banco de dados eficiente e completo para armazenar informações!",
            },
            {
                icon: "fas fa-edit",
                title: "Web Desing",
                content: "Sites estilosos criados a cara da sua marca!",
            },
        ]);
    }, []);

    return (
        <section id={style.specialties}>
            <Container>
                <Title>Especialidades</Title>
                <div className={style.specialties}>
                    {specialties.map((val) => {
                        return (
                            <div className={style.wrapper}>
                                <i class={val.icon}></i>
                                <h3>{val.title}</h3>
                                <Text>{val.content}</Text>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
