import { Link, Element} from 'react-scroll';
import style from './../styles/components/Header.module.css';
import SlideToggle from "react-slide-toggle";

export default function Header(){
    return (
        <header id={style.header}>
            <Element name="Home" className="container">
                <h1>
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-30} duration={500}>Brennon Oliveira</Link>
                </h1>
                <nav>
                    <ul className={style.desktop}>
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
                    <SlideToggle
                    collapsed
                    duration={400}
                    noDisplayStyle
                    render={({ toggle, setCollapsibleElement }) => (
                        <div className={style.mobile}>
                        <i className="fas fa-bars" id="menuMobile" aria-hidden="true" onClick={toggle}></i>
                            <ul ref={setCollapsibleElement}>
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
                        </div>
                    )}
                />
                    
                    
                </nav>
            </Element>
            
        </header>
    )
}