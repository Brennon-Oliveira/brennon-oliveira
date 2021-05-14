import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [scrollTop, setScrollTop] = useState(false);

  function scroll(){
    if(window.pageYOffset > 100 && !scrollTop){
      setScrollTop(true);
    } else if(window.pageYOffset < 100 && scrollTop) {
      setScrollTop(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scroll)
  })

  return (
    <Router>
      <div className="App" onScroll={scroll()}>
        <Header />
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        {
          scrollTop&&<Link  activeClass="active" to="Home" spy={true} smooth={true} offset={-30} duration={500} className='upLink'><i class="fas fa-arrow-up"></i></Link>
        }
        <Menu />
      </div>
    </Router>
  );
}

export default App;
