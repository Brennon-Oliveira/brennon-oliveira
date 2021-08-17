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
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://api.whatsapp.com/send?phone=5542999017838&amp;text=Ola%2C%20podemos%20conversar%20sobre%20o%20meu%20site%3F"
                            >
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/profile.php?id=100006669199502"
                            >
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/brennon-oliveira-96a5621bb/"
                            >
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/brenn0n_oliveira/"
                            >
                                <i class="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/Brennon-Oliveira"
                            >
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
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://api.whatsapp.com/send?phone=5542999017838&amp;text=Ola%2C%20podemos%20conversar%20sobre%20o%20meu%20site%3F"
                                >
                                    <span>
                                        <i class="fab fa-whatsapp"></i>
                                    </span>
                                    <span>Whatsapp</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/profile.php?id=100006669199502"
                                >
                                    <span>
                                        <i class="fab fa-facebook-f"></i>
                                    </span>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/brennon-oliveira-96a5621bb/"
                                >
                                    <span>
                                        <i class="fab fa-linkedin-in"></i>
                                    </span>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/brenn0n_oliveira/"
                                >
                                    <span>
                                        <i class="fab fa-instagram"></i>
                                    </span>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/Brennon-Oliveira"
                                >
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
