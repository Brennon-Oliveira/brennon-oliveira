import BlogHome from "../sections/blog/BlogHome";
import Navigation from "../sections/blog/Navigation";
import Search from "../sections/blog/Search";
import { useEffect } from "react";

export default function Blog() {
    useEffect(() => {
        const favicon = document.getElementById("favicon");
        favicon.href = "/blog.ico";
    }, []);

    return (
        <>
            <Navigation />
            <Search />
            <BlogHome />
        </>
    );
}
