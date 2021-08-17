import { Element } from "react-scroll";
import style from "./../styles/components/Container.module.scss";

export default function Container({ min, children, name }) {
    return (
        <Element
            name={name ? name : "name" + Math.random()}
            className={min ? style.containerMin : style.container}
        >
            {children}
        </Element>
    );
}
