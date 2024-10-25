import { useState } from 'react';
import './App.css';
import lang from './components/functions/lang';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Projetos from './pages/Projetos';
import Navbar from './components/Navbar';

function App() {

  const [language,setLang] = useState<"en"|"pt-br">("pt-br");

  return (
    <BrowserRouter>
    <Navbar {...lang(language)["navBar"]}/>
    <div>
      <Routes>
        <Route path = "/" element = {<Home  {...lang(language)["home"]} />} />
        <Route path = "/Projetos/*" element = {<Projetos projetos={lang(language)["projetos"]} default = {lang(language)["home"]["content"][4]} />}/>
      </Routes>
      
    </div>
    <Footer {...lang(language)["footer"]}/>
    </BrowserRouter>
  );
}

export default App;
