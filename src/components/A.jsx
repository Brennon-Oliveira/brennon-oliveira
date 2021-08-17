import style from "../styles/components/Link.module.scss";
import { Link } from "react-scroll";

export default function A({ children, to }) {
    return (
        <Link
            activeClass="active"
            to={to ? to : "Home"}
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className={style.link}
        >
            {children}
        </Link>
    );
}
