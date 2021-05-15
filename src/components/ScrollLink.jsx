import React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

export default function ScrollLink(props){

    async function scroll(){
        await setTimeout(()=>{},3000);
        Scroll.scroller.scrollTo(props.element,{
            duration: props.duration,
            smooth: true,
            offset: -30,
        });
    }

    return(
        <Link to={props.page} onClick={scroll}>{props.children}</Link>
    )
}