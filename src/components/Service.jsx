import React from 'react';
import style from './../styles/components/Service.module.css';

export default function Services(props){
    return(
        <div id={style.service}>
                <div>
                    <span>{props.id}</span>
                    {!props.last&&<div></div>}
                </div>
            <p>{props.text}</p>
        </div>
    )
}