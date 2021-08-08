import Container from "../../components/Container";
import style from "../../styles/sections/Banner.module.scss";
import Link from "../../components/Link";

export default function Banner(props) {
    return (
        <section id={style.banner}>
            <div className={style.overlay}></div>
            <Container>
                <header id={style.header}>
                    <h1>
                        <a href="">
                            Brennon Oliveira
                            <div></div>
                        </a>
                    </h1>
                    <button>
                        <span></span>
                    </button>
                </header>
                <div className={style.content}>
                    <div className={style.infos}>
                        <h2>
                            We are a creative group of people who design
                            influential brands and digital experiences.
                        </h2>
                        <p>WELCOME TO GLINT</p>
                        <div className={style.buttons}>
                            <Link>Contato</Link>
                            <Link>Ferramentas</Link>
                        </div>
                    </div>
                    <div className={style.social}>
                        <ul>
                            <li>
                                <a href="">
                                    <span>Whatsapp</span>
                                    <span>
                                        <i class="fab fa-whatsapp"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Facebook</span>
                                    <span>
                                        <i class="fab fa-facebook-f"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Linkedin</span>
                                    <span>
                                        <i class="fab fa-linkedin-in"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Instagram</span>
                                    <span>
                                        <i class="fab fa-instagram"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Github</span>
                                    <span>
                                        <i class="fab fa-github"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
