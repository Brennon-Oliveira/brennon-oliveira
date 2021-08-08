import Container from "../../components/Container";
import style from "../../styles/sections/Banner.module.scss";
import Link from "../../components/Link";
import { useEffect } from "react";

export default function Banner(props) {
    function toggleMenu(e) {
        if (e.type === "touchstart") e.preventDefault();
        let menu = document.querySelector("." + style.menu);
        let btn = document.querySelector("#" + style.header + " button");
        let body = document.querySelector("body");
        menu.classList.toggle("active");
        btn.classList.toggle("active");
        body.classList.toggle("menu");
    }

    useEffect(() => {
        var btn = document.querySelector("#" + style.header + " button");
        btn.addEventListener("touchstart", (e) => {
            toggleMenu(e);
        });
        btn.addEventListener("click", (e) => {
            toggleMenu(e);
        });
    }, []);

    return (
        <section id={style.banner}>
            <div className={`${style.menu} active`}>
                <h2>Menu</h2>
                <nav className={style.options}>
                    <ul>
                        <li>
                            <a href="">
                                Ferramentas
                                <div></div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Produtos
                                <div></div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Especialidades
                                <div></div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Currículo
                                <div></div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Projetos
                                <div></div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contato<div></div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <p>
                    Caso precise de alguma informação, por favor entre em{" "}
                    <a href="">contato</a> na sessão de contato!
                </p>
                <nav className={style.menuSocial}>
                    <ul>
                        <li>
                            <a href="">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={style.overlay}></div>
            <Container>
                <header id={style.header}>
                    <h1>
                        <a href="">
                            Brennon Oliveira
                            <div></div>
                        </a>
                    </h1>
                    <button className={style.menuButton}>
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
                    <nav className={style.social}>
                        <ul>
                            <li>
                                <a href="">
                                    <span>
                                        <i class="fab fa-whatsapp"></i>
                                    </span>
                                    <span>Whatsapp</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        <i class="fab fa-facebook-f"></i>
                                    </span>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        <i class="fab fa-linkedin-in"></i>
                                    </span>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        <i class="fab fa-instagram"></i>
                                    </span>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>
                                        <i class="fab fa-github"></i>
                                    </span>
                                    <span>Github</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </section>
    );
}
