import "./styles/global.scss";
import Home from "./pages/Home";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    useParams,
} from "react-router-dom";
import AppProvider from "./context/AppContext";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Blog from "./pages/Blog";
import Page from "./sections/blog/Page";
import { useState } from "react";

function App() {
    return (
        <div className="App">
            <AppProvider>
                <Router>
                    <Banner />
                    <Switch>
                        <Route path="/blog/:topic/:post/:class">
                            <Blog />
                        </Route>
                        <Route path="/blog/:topic/:post">
                            <Blog />
                        </Route>
                        <Route path="/blog/:topic">
                            <Blog />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AppProvider>
        </div>
    );
}

export default App;
