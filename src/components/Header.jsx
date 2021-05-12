import { useEffect, useState } from 'react';
import { Link, Element} from 'react-scroll';
import style from './../styles/components/Header.module.css';

export default function Header(){

    const [ariaExpanded, setAriaExpanded] = useState(false);
    const [ariaLabel, setAriaLabel] = useState("Abrir menu");

    function toggleMenu(e){
        if(e.type === 'touchstart') e.preventDefault();
        var menu = document.querySelector('.'+style.menu);
        menu.classList.toggle('active');
        var active = menu.classList.contains('active')
        setAriaExpanded(active);
        setAriaLabel(active?'Abrir menu':'Fechar menu');
    }
    
    useEffect(()=>{
        var btn = document.querySelector('.'+style.menuButton)
        btn.addEventListener('touchstart',(e)=>{toggleMenu(e)})
        btn.addEventListener('click',(e)=>{toggleMenu(e)})
    },[])

    return (
        <header id={style.header}>
            <div name="Home" className="container">
                <h1>
                    <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-30} duration={500}>Brennon Oliveira</Link>
                </h1>
                <nav className={style.menu}>
                    <ul id='menu' role='menu'>
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
                    <button aria-label={ariaLabel} aria-haspopup="true" aria-controls='menu' aria-expanded={ariaExpanded} id='btnMenu' class={style.menuButton}>
                        <span></span>
                    </button>
                </nav>
            </div>
            
        </header>
    )
}