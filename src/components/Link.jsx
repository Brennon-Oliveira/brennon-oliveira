import style from "../styles/components/Link.module.scss";

export default function Link({ children }) {
    return <button className={style.link}>{children}</button>;
}
