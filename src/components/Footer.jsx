import { Link } from 'react-scroll';
import style from './../styles/components/Footer.module.css';

export default function Footer(){
   return(
       <footer id={style.footer}>
           <div className="container">
               <h1><Link activeClass="active" to="Home" spy={true} smooth={true} offset={-30} duration={500} >Brennon Oliveira </Link></h1>
               <ul>
                   <li><a href="https://api.whatsapp.com/send?phone=5542999017838&text=Ola%2C%20podemos%20conversar%20sobre%20o%20meu%20site%3F"><i class="fab fa-whatsapp" aria-hidden="true"></i> (42) 99901-7838</a></li>
                   <li><a href="https://www.facebook.com/profile.php?id=100006669199502"><i class="fab fa-facebook-f" aria-hidden="true"></i> Brennon Oliveira</a></li>
               </ul>
           </div>
       </footer>
   ) 
}