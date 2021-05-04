import react from 'react';
import { Link, Element} from 'react-scroll';
import style from './../styles/components/Header.module.css';

export default function Header(){
    return (
        <header id={style.header}>
            <Element name="home" className="container">
                <h1>
                    <Link to="home">Brennon Oliveira</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="Home" >Home</Link>
                        </li>
                        <li>
                            <Link to="Home">Sobre</Link>
                        </li>
                        <li>
                            <Link to="Home">Serviços</Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="Home" to="test1" spy={true} smooth={true} offset={50} duration={500}>Contato</Link>
                        </li>
                    </ul>
                </nav>
            </Element>
        </header>
    )
}