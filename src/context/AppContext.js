import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider(props) {
    const [curRoute, setCurRoute] = useState(window.location.pathname);

    function changeRoute(route) {
        setCurRoute("/" + route);
    }

    return (
        <AppContext.Provider
            value={{
                curRoute,
                changeRoute,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
