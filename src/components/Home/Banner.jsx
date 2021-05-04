import react from 'react';
import style from './../../styles/components/home/Banner.module.css';

export default function Footer(){
   return(
       <section id={style.banner}>
           <div className={style.overlay}></div>
           <div className="container">
               <div className={style.bannerContent}>
                   <h2>Seu site completo<br/>do jeito que você quiser!</h2>
                   <a href="">Entrar em contato!</a>
               </div>
           </div>
       </section>
   ) 
}