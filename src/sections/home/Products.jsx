import style from "../../styles/sections/Products.module.scss";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            {
                title: "Landing Page",
                content: "Landing Pages para anunciar o seu negócio",
            },
            {
                title: "E-Commerce",
                content: "Site de vendas para o seu negócio",
            },
            {
                title: "PromoPages",
                content: "Páginas promocionais para divulgar seu trabalho",
            },
            {
                title: "Personal Pages",
                content: "Sites pessoais para você que sempre desejou",
            },
            {
                title: "Storage Controll",
                content: "Sistema de estoque e armazenamento",
            },
            {
                title: "E-Mail Marketing",
                content: "E-Mail Marketing para fidelizar seus clientes",
            },
            {
                title: "Fluxo Pago",
                content: "Google ads e outras formas de alavancar o seu site",
            },
            {
                title: "Mobile Apps",
                content: "Aplicativos mobile para Android e IOS",
            },
            {
                title: "Bots e Web Scrapping",
                content: "Bots de busca e coleta de dados",
            },
            {
                title: "Automações",
                content: "Robôs e outros processos automatizados",
            },
        ]);
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section id={style.products}>
            <Container name="Products" min>
                <Title>Produtos</Title>
                <div className={style.productsContainer}>
                    {products.map((val, i) => {
                        let aosDir = i % 2 !== 0 ? "left" : "right";
                        return (
                            <div
                                data-aos={`fade-${aosDir}`}
                                className={style.wrapper}
                            >
                                <div className={style.header}>
                                    <h4>{i + 1}</h4>
                                    <h3>{val.title}</h3>
                                </div>
                                <div className={style.content}>
                                    <Text>{val.content}</Text>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
