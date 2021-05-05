import React, { useEffect, useState } from 'react';
import style from './../../styles/components/home/Contact.module.css';
import { Element } from 'react-scroll';

export default function Contact(){

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
            setNumber('Campos vazios não são permitidos')
            return false
        }

        if(message === ''){
            setMessageVoid(true);
            document.getElementById("message").classList.add('formError');
            setMessage('Campos vazios não são permitidos');
            return false
        }
        

        alert('Nome: '+name+'\nNumero: '+number+'\nemail: '+email+'\nMensagem: '+message);
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
            setNumber('')
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
                    <div><input onClick={()=>{numberReset()}} onChange={e=>setNumber(e.target.value)} value={number} id='number' name="number" type="text" placeholder="Telefone..."/></div>
                    <div>
                        <textarea onClick={()=>{messageReset()}} onChange={(e)=>{setMessage(e.target.value)}} value={message} id='message' name='message' placeholder='Mensagem...'></textarea>
                    </div>
                    <div><button>Enviar!</button></div>
                </form>
            </Element>
        </section>
    )
}