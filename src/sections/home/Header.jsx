import { Link } from "react-scroll";
import { Element } from "react-scroll";

export default function Header({ style, toggleMenu }) {
    return (
        <Element name="Home" className={`${style.menu} active`}>
            <h2>Menu</h2>
            <nav className={style.options}>
                <ul>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            activeClass="active"
                            to="Home"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Ferramentas
                            <div></div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            activeClass="active"
                            to="Products"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Produtos
                            <div></div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            activeClass="active"
                            to="Specialties"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Especialidades
                            <div></div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            activeClass="active"
                            to="Resume"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Currículo
                            <div></div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Projetos
                            <div></div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={toggleMenu}
                            activeClass="active"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={-30}
                            duration={500}
                        >
                            Contato<div></div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <p>
                Caso precise de alguma informação, por favor entre em{" "}
                <Link
                    onClick={toggleMenu}
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                >
                    contato
                </Link>{" "}
                na sessão de contato!
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
        </Element>
    );
}
