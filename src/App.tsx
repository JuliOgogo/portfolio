import React, {useState} from 'react';
import './App.scss';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {

    // change bg color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY > window.innerHeight) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'App AppHeader' : 'App'}>
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
