import style from "../../styles/sections/Contact.module.scss";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Text from "../../components/Text";

export default function Contact() {
    return (
        <section id={style.contact}>
            <Container>
                <Title>Entre em contato</Title>
                <form action="">
                    <div className={style.wrapper}>
                        <input type="text" placeholder="Nome..." />
                    </div>
                    <div className={style.wrapper}>
                        <input type="text" placeholder="E-Mail..." />
                    </div>
                    <div className={style.wrapper}>
                        <input type="text" placeholder="Telefone..." />
                    </div>
                    <div className={style.wrapper}>
                        <textarea
                            name=""
                            id=""
                            placeholder="Mensagem..."
                        ></textarea>
                    </div>
                    <div className={style.wrapper}>
                        <button>Enviar!</button>
                    </div>
                </form>
            </Container>
            <Container>
                <Title>Informações</Title>
                <div className={style.wrapper}>
                    <h3>Email:</h3>
                    <Text>contato@brennonaleatorio.com.br</Text>
                </div>
                <div className={style.wrapper}>
                    <h3>Telefone:</h3>
                    <Text>+55 (42) 99901-7838</Text>
                </div>
                <div className={style.social}>
                    <nav>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=5542999017838&amp;text=Ola%2C%20podemos%20conversar%20sobre%20o%20meu%20site%3F"
                                >
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=100006669199502"
                                >
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/brennon-oliveira-96a5621bb/"
                                >
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/brenn0n_oliveira/"
                                >
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://github.com/Brennon-Oliveira"
                                >
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </section>
    );
}
