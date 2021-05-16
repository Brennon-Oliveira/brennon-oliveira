import { useEffect, useState } from 'react';
import { Link, Element} from 'react-scroll';
import style from './../styles/components/Header.module.css';
import ScrollLink from './ScrollLink';

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
                    <ScrollLink>Brennon Oliveira</ScrollLink>
                </h1>
                <nav className={style.menu}>
                    <ul id='menu' role='menu'>
                        <li>
                            <ScrollLink />
                        </li>
                        <li>
                            <ScrollLink element='About'>Sobre</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink element='Services'>Serviços</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink element='Contact' duration='800'>Contato</ScrollLink>
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