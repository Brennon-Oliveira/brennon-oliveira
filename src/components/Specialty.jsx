import React from 'react';
import style from './../styles/components/Specialty.module.css';

export default function Specialty(props){
    return(
        <div id={style.specialty}>
            <div className={style.imageContainer}><img src={props.image} alt=""/></div>
            <div className={style.content}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <span><i class={props.icon} aria-hidden="true"></i></span>
            </div>
        </div>
    )
}