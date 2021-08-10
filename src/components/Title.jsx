import style from "../styles/components/Title.module.scss";

export default function Title({ children }) {
    return <h2 className={style.title}>{children}</h2>;
}
