import react from 'react';
import { Link, Element} from 'react-scroll';
import style from './../styles/components/Header.module.css';

export default function Header(){
    return (
        <header id={style.header}>
            <Element name="Home" className="container">
                <h1>
                    <Link to="Home">Brennon Oliveira</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-30} duration={500} >Home</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-30} duration={500}>Sobre</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Services" spy={true} smooth={true} offset={-30} duration={500}>Serviços</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-30} duration={500}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </Element>
        </header>
    )
}