import react from 'react';
import { Link } from 'react-scroll';
import style from './../../styles/components/home/Banner.module.css';

export default function Footer(){
   return(
       <section id={style.banner}>
           <div className={style.overlay}></div>
           <div className="container">
               <div className={style.bannerContent}>
                   <h2>Seu site completo<br/>do jeito que você quiser!</h2>
                   <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-30} duration={500}>Entrar em contato!</Link>
               </div>
           </div>
       </section>
   ) 
}