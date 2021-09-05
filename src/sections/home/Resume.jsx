import style from "../../styles/sections/Resume.module.scss";
import Title from "../../components/Title";
import Container from "../../components/Container";
import Text from "../../components/Text";
import A from "../../components/A";
import { useState } from "react";

export default function Resume() {
    const [resumeInfo, setResumeInfo] = useState({
        name: "Brennon Gabriel de Oliveira",
        nationality: "Brasileiro",
        state: "Solteiro",
        age: 17,
        email: "brennonoliveira20014@gmail.com",
        number: "42999017838",
        goals: "Atuar como Desenvolvedor Web",
        formation: [
            "Ensino Médio. Padre Pedro Grzelczak, previsão de conclusão em 2021.",
        ],
        professionalExperience: [
            {
                title: "2021-2021 - Autônomo",
                office: ["Desenvolvedor Web"],
            },
        ],
        qualifications: [
            "Curso Webmaster Front-End Completo (Danki Code, 2020 - Carga Horária: 80 horas)",
            "Curso Design de Aplicativos (Danki Code, 2021 - Carga Horária: 3 horas)",
            "Curso de JavaScript (SoloLearn, 2020)",
            "Curso Produtividade para Programadores (Danki Code, 2021 - Carga Horária: 3 horas)",
            "Curso Agência Web de Sucesso (Danki Code, 2021 - Carga Horária: 6 horas)",
            "Curso de HTML (SoloLearn, 2020)",
            "Curso de CSS (SoloLearn, 2020)",
            "Conhecimento em React e React native",
            "Curso de PHP (SoloLearn, 2020)",
            "Curso de Java (SoloLearn, 2020)",
            "Curso Git e contribuições para projetos Open Source (Udemy, 2021 - 3,5 horas)",
        ],
        additionalInfos: [
            "Conhecimento em Inglês",
            "Conhecimento em Windows e Linux",
        ],
    });

    return (
        <section id={style.resume}>
            <Container name="Resume" min>
                <div className={style.header}>
                    <div className={style.infos}>
                        <Title>{resumeInfo.name}</Title>
                        <Text>
                            {resumeInfo.nationality}, {resumeInfo.state},{" "}
                            {resumeInfo.age} anos
                        </Text>
                        <Text>E-Mail: {resumeInfo.email}</Text>
                        <Text>Telefone: {resumeInfo.number}</Text>
                    </div>
                    <div className={style.image}>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <Title>Objetivos</Title>
                    <Text>{resumeInfo.goals}</Text>
                </div>
                <div>
                    <Title>Formação</Title>
                    <ul>
                        {resumeInfo.formation.map((val) => {
                            return (
                                <li>
                                    <Text>{val}</Text>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <Title>Experiência Profissional</Title>
                    <ul>
                        {resumeInfo.professionalExperience.map((val) => {
                            return (
                                <li>
                                    <Text>{val.title}</Text>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <Title>Qualificações e Atividades Complementares</Title>
                    <ul>
                        {resumeInfo.qualifications.map((val) => {
                            return (
                                <li>
                                    <Text>{val}</Text>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <Title>Informações Adicionais</Title>
                    <ul>
                        {resumeInfo.additionalInfos.map((val) => {
                            return (
                                <li>
                                    <Text>{val}</Text>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={style.buttons}>
                    <A downloadPDF>Baixar em PDF</A>
                    <A downloadPDF>Certificados</A>
                </div>
            </Container>
        </section>
    );
}
