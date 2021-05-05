import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './App.css';

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
    <div className="App" onScroll={scroll()}>
      <Header />
      <Home />
      <Footer />
      {
        scrollTop&&<Link  activeClass="active" to="Home" spy={true} smooth={true} offset={-30} duration={500} className='upLink'><i class="fas fa-arrow-up"></i></Link>
      }
    </div>
  );
}

export default App;
