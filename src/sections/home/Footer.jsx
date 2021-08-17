import style from "../../styles/sections/Footer.module.scss";
import Container from "../../components/Container";
import Text from "../../components/Text";

export default function Footer() {
    return (
        <footer id={style.footer}>
            <Container>
                <div className={style.social}>
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
                </div>
                <Text> Copyright (©) Brennon Oliveira, 2021.</Text>
            </Container>
        </footer>
    );
}
