import { createContext, useState } from "react";

import Text from "../components/Text";
import Title from "../components/Title";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const AppContext = createContext();

export default function AppProvider(props) {
    const [curRoute, setCurRoute] = useState(window.location.pathname);
    const [blogData, setBlogData] = useState([]);

    function changeRoute(route) {
        setCurRoute("/" + route);
    }

    async function getBlogData() {
        await fetch("https://brennonaleatorioapi.herokuapp.com/getTopics")
            .then((data) => data.json())
            .then((data) => {
                setBlogData(data);
            });
    }

    return (
        <AppContext.Provider
            value={{
                curRoute,
                changeRoute,
                getBlogData,
                blogData,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
