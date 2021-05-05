import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import style from './App.css';

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
        scrollTop&&<Link to='home' className='upLink'>▲</Link>
      }
    </div>
  );
}

export default App;
