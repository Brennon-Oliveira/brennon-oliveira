import BlogHome from "../sections/blog/BlogHome";
import Navigation from "../sections/blog/Navigation";
import Search from "../sections/blog/Search";
import style from "../styles/sections/blog/Main.module.scss";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import loading from "../assets/images/Loading.gif";

export default function Blog() {
    const { blogData, getBlogData } = useContext(AppContext);

    getBlogData();

    useEffect(() => {
        const favicon = document.getElementById("favicon");
        favicon.href = "/blog.ico";
    }, []);

    if (blogData.length > 5) {
        return (
            <>
                <Navigation />
                <Search />
                <BlogHome />
            </>
        );
    } else {
        return (
            <>
                <div className={style.loading}>
                    <img src={loading} alt="Loading gif" />
                    <p>Carregando</p>
                </div>
            </>
        );
    }
}
