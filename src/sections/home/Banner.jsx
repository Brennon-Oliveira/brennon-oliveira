import Container from "../../components/Container";
import style from "../../styles/sections/Banner.module.scss";
import A from "../../components/A";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import Header from "./Header";

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
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section id={style.banner}>
            <Header toggleMenu={toggleMenu} style={style} />
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
                    <div className={style.infos} data-aos="fade-right">
                        <h2>
                            We are a creative group of people who design
                            influential brands and digital experiences.
                        </h2>
                        <p>WELCOME TO GLINT</p>
                        <div className={style.buttons}>
                            <A to="Contact">Contato</A>
                            <A>Ferramentas</A>
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
