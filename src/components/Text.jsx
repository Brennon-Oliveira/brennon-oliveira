import style from "../styles/components/Text.module.scss";

export default function Text({ children }) {
    return <p className={style.text}>{children}</p>;
}
