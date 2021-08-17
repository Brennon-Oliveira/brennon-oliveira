import style from "../../styles/sections/Contact.module.scss";
import Container from "../../components/Container";
import Title from "../../components/Title";
import Text from "../../components/Text";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import { useState } from "react";

export default function Contact() {
    const [isContact, setIsContact] = useState(true);

    const [nameForm, setNameForm] = useState("Entre em contato");
    const [emailForm, setEmailForm] = useState(
        "contato@brennonaleatorio.com.br"
    );
    const [linkForm, setLinkForm] = useState("Reportar um erro");
    const [messageForm, setMessageForm] = useState("Mensagem...");
    const [submitForm, setSubmitForm] = useState("Enviar!");
    const [formTemplate, setFormTemplate] = useState("CONTACT_FORM");

    const [sucessMessage, setSucessMessage] = useState(
        "Messagem enviada com sucesso!😃"
    );
    const [errorMessage, setErrorMessage] = useState(
        "Houve um erro ao envia a mensagem!😢"
    );
    const [waitMessage, setWaitMessage] = useState(
        "Calma! Estamos enviando sua mensagem!🕐"
    );

    const [isSending, setIsSending] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const [nameVoid, setNameVoid] = useState(false);
    const [emailVoid, setEmailVoid] = useState(false);
    const [numberVoid, setNumberVoid] = useState(false);
    const [messageVoid, setMessageVoid] = useState(false);

    function submit(e) {
        e.preventDefault();
        if (isSending) {
            alert(waitMessage);
            return false;
        }
        if (name === "" || name === "Campos vazios não são permitidos") {
            setNameVoid(true);
            document.getElementById("name").classList.add("formError");
            setName("Campos vazios não são permitidos");
            return false;
        }

        if (email === "" || email === "Campos vazios não são permitidos") {
            setEmailVoid(true);
            document.getElementById("email").classList.add("formError");
            setEmail("Campos vazios não são permitidos");
            return false;
        }

        if (number === "" || number === "Campos vazios não são permitidos") {
            setNumberVoid(true);
            document.getElementById("number").classList.add("formError");
            return false;
        }

        if (message === "" || message === "Campos vazios não são permitidos") {
            setMessageVoid(true);
            document.getElementById("message").classList.add("formError");
            setMessage("Campos vazios não são permitidos");
            return false;
        }
        if (number[number.length - 1] === "_") {
            setNumberVoid(true);
            document.getElementById("number").classList.add("formError");
            alert("Insira seu número completo");
            return false;
        }
        setIsSending(true);
        emailjs
            .sendForm(
                "service_7zwr6sd",
                formTemplate,
                e.target,
                "user_HZpQGea5eCHlOIxwiWhKO"
            )
            .then(
                (result) => {
                    alert(sucessMessage);
                    setName("");
                    setEmail("");
                    setNumber("");
                    setMessage("");
                    setIsSending(false);
                },
                () => {
                    alert(errorMessage);
                    setIsSending(false);
                }
            );
    }

    function nameReset() {
        if (nameVoid) {
            document.getElementById("name").classList.remove("formError");
            setName("");
            setNameVoid(false);
        }
    }

    function emailReset() {
        if (emailVoid) {
            document.getElementById("email").classList.remove("formError");
            setEmail("");
            setEmailVoid(false);
        }
    }

    function numberReset() {
        if (numberVoid) {
            document.getElementById("number").classList.remove("formError");
            setNumberVoid(false);
        }
    }

    function messageReset() {
        if (messageVoid) {
            document.getElementById("message").classList.remove("formError");
            setMessage("");
            setMessageVoid(false);
        }
    }

    function changeForm(e) {
        e.preventDefault();
        if (!isContact) {
            setNameForm("Entre em contato");
            setEmailForm("contato@brennonaleatorio.com.br");
            setLinkForm("Reportar um erro");
            setMessageForm("Mensagem...");
            setSubmitForm("Enviar!");
            setFormTemplate("CONTACT_FORM");

            setSucessMessage("Messagem enviada com sucesso!😃");
            setErrorMessage("Houve um erro ao enviar a mensagem!😢");
            setWaitMessage("Calma! Estamos enviando sua mensagem!🕐");

            setIsContact(true);
        } else {
            setNameForm("Reporte um erro");
            setEmailForm("report@brennonaleatorio.com.br");
            setLinkForm("Entrar em contato");
            setMessageForm("Reporte...");
            setSubmitForm("Reportar!");
            setFormTemplate("REPORT_FORM");

            setSucessMessage("Reporte enviado com sucesso!😃");
            setErrorMessage("Houve um erro ao enviar o reporte!😢");
            setWaitMessage("Calma! Estamos enviando seu reporte!🕐");

            setIsContact(false);
        }
    }

    return (
        <section id={style.contact}>
            <Container>
                <Title>{nameForm}</Title>
                <form onSubmit={(e) => submit(e)}>
                    <div className={style.wrapper}>
                        <input
                            onClick={() => {
                                nameReset();
                            }}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Nome..."
                        />
                    </div>
                    <div className={style.wrapper}>
                        <input
                            onClick={() => {
                                emailReset();
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-Mail..."
                        />
                    </div>
                    <div className={style.wrapper}>
                        <InputMask
                            mask="+55 (99) 99999-9999"
                            onClick={() => {
                                numberReset();
                            }}
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            id="number"
                            name="number"
                            type="text"
                            placeholder="Telefone..."
                        />
                    </div>
                    <div className={style.wrapper}>
                        <textarea
                            onClick={() => {
                                messageReset();
                            }}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            value={message}
                            id="message"
                            name="message"
                            placeholder={messageForm}
                        ></textarea>
                    </div>
                    <div className={style.wrapper}>
                        <button>{submitForm}</button>
                    </div>
                </form>
            </Container>
            <Container>
                <Title>Informações</Title>
                <div className={style.wrapper}>
                    <h3>Email:</h3>
                    <Text>{emailForm}</Text>
                </div>
                <div className={style.wrapper}>
                    <h3>Telefone:</h3>
                    <Text>+55 (42) 99901-7838</Text>
                </div>
                <div className={style.social}>
                    <nav>
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
                    </nav>
                </div>
                <div className={style.change}>
                    <a
                        href=""
                        onClick={(e) => {
                            changeForm(e);
                        }}
                    >
                        {linkForm}
                    </a>
                </div>
            </Container>
        </section>
    );
}
