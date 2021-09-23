import "./styles/global.scss";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppProvider from "./context/AppContext";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Blog from "./pages/Blog";

function App() {
    function changeIconTo(icon) {
        const favicon = document.getElementById("favicon");
        if (favicon === "blog") {
            favicon.href = "/blog.ico";
        } else {
            favicon.href = "/favicon.ico";
        }
    }

    return (
        <div className="App">
            <AppProvider>
                <Router>
                    <Banner />
                    <Switch>
                        <Route path="/blog/:topic/:page/:post">
                            <Blog />
                        </Route>
                        <Route path="/blog/:topic/:page">
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
