import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

export default function ScrollLink(props){

    const [page] = useState((props.page == undefined || props.page === 'home') ? '' : props.page);
    const [duration] = useState(props.duration || 500);
    const [offset] = useState(props.offset || -30);
    const [smooth] = useState(props.smooth || true);
    const [element] = useState(props.element || 'Home')
    const [children] = useState(props.children || 'Home')

    async function scroll(){
        await setTimeout(()=>{},3000);
        Scroll.scroller.scrollTo(element,{
            duration: duration,
            smooth: smooth,
            offset: offset,
        });
    }

    return(
        <Link to={page} onClick={scroll}>{children} {page}</Link>
    )
}