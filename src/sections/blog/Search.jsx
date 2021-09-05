import Container from "../../components/Container";
import Title from "../../components/Title";
import style from "../../styles/sections/blog/Search.module.scss";

export default function Search() {
    return (
        <section id={style.search}>
            <Container name="Search">
                <Title>Buscar:</Title>
                <div className={style.searchBar}>
                    <input type="text" />
                    <i class="fas fa-search"></i>
                </div>
            </Container>
        </section>
    );
}
