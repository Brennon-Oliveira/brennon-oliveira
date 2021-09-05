import "./styles/global.scss";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppProvider from "./context/AppContext";
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";

function App() {
    return (
        <div className="App">
            <AppProvider>
                <Router>
                    <Banner />
                    <Switch>
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
