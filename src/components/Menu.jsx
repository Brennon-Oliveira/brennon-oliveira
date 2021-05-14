import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './../styles/components/Menu.module.css'

export default function Menu(){

    function toggleMenu(e){
        if(e.type === 'touchstart') e.preventDefault();
        var menu = document.querySelector('.'+style.menu);
        var btn = document.querySelector('.'+style.btn);
        menu.classList.toggle('active');
        btn.classList.toggle('active');
    }
    
    useEffect(()=>{
        var btn = document.querySelector('.'+style.btn)
        btn.addEventListener('touchstart',(e)=>{toggleMenu(e)})
        btn.addEventListener('click',(e)=>{toggleMenu(e)})
    },[])

    return(
        <div>
            <nav className={style.menu}>
                <ul>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='resume'>Currículo</Link></li>
                    <li><Link to='projects'>Projetos</Link></li>
                </ul>
            </nav>
            <button className={style.btn}><span></span></button>
        </div>
    )
}