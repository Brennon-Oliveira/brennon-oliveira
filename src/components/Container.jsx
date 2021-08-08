import style from "./../styles/components/Container.module.scss";

export default function Container({ min, children }) {
    return (
        <div className={min ? style.containerMin : style.container}>
            {children}
        </div>
    );
}
