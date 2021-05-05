import React, { useState } from 'react';
import style from './../../styles/components/home/Contact.module.css';
import emailjs from 'emailjs-com';
import { Element } from 'react-scroll';
import InputMask from "react-input-mask";

export default function Contact(){

    const [isSending, setIsSending] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const [nameVoid, setNameVoid] = useState(false);
    const [emailVoid, setEmailVoid] = useState(false);
    const [numberVoid, setNumberVoid] = useState(false);
    const [messageVoid, setMessageVoid] = useState(false);

    function submit(e){
        e.preventDefault();
        if(isSending){
            alert("Calma! Estamos enviando sua mensagem!");
            return false
        }
        if(name === ''){
            setNameVoid(true);
            document.getElementById("name").classList.add('formError');
            setName('Campos vazios não são permitidos')
            return false
        }

        if(email === ''){
            setEmailVoid(true);
            document.getElementById("email").classList.add('formError');
            setEmail('Campos vazios não são permitidos')
            return false
        }

        if(number === ''){
            setNumberVoid(true);
            document.getElementById("number").classList.add('formError');
            return false
        }

        if(message === ''){
            setMessageVoid(true);
            document.getElementById("message").classList.add('formError');
            setMessage('Campos vazios não são permitidos');
            return false
        }
        if(number[number.length - 1] === '_'){
            setNumberVoid(true);
            document.getElementById("number").classList.add('formError');
            alert('Insira seu número completo')
            return false
        }
        setIsSending(true);
        emailjs.sendForm('service_7zwr6sd', 'CONTACT_FORM', e.target, "user_HZpQGea5eCHlOIxwiWhKO")
        .then((result) => {
            alert('Messagem enviada com sucesso!😃');
            setName('');
            setEmail('');
            setNumber('');
            setMessage('');
            setIsSending(false);
        }, (error) => {
            alert('Houve um erro ao envia a mensagem!😢');
            setIsSending(false);
        });
    }

    function nameReset(){
        if(nameVoid){
            document.getElementById("name").classList.remove('formError');
            setName('');
            setNameVoid(false);
        }
    }

    function emailReset(){
        if(emailVoid){
            document.getElementById("email").classList.remove('formError');
            setEmail('');
            setEmailVoid(false);
        }
    }

    function numberReset(){
        if(numberVoid){
            document.getElementById("number").classList.remove('formError');
            setNumberVoid(false);
        }
    }

    function messageReset(){
        if(messageVoid){
            document.getElementById("message").classList.remove('formError');
            setMessage('')
            setMessageVoid(false);
        }
    }

    return(
        <section id={style.contact}>
            <Element name="Contact" className="container">
                <h2>Entre em contato</h2>
                <p>E-Mail: contato@brennonaleatorio.com.br</p>
                <form onSubmit={e =>submit(e)} id={style.form}>
                    <div><input onClick={()=>{nameReset()}} onChange={e=>setName(e.target.value)} value={name} id='name' name="name" type="text" placeholder="Nome..."/></div>
                    <div><input onClick={()=>{emailReset()}} onChange={e=>setEmail(e.target.value)} value={email} id='email' name='email' type="email" placeholder="E-Mail..."/></div>
                    <div><InputMask mask='+55 (99) 99999-9999' onClick={()=>{numberReset()}} onChange={e=>setNumber(e.target.value)} value={number} id='number' name="number" type="text" placeholder="Telefone..."/></div>
                    <div>
                        <textarea onClick={()=>{messageReset()}} onChange={(e)=>{setMessage(e.target.value)}} value={message} id='message' name='message' placeholder='Mensagem...'></textarea>
                    </div>
                    <div><button>Enviar!</button></div>
                </form>
            </Element>
        </section>
    )
}