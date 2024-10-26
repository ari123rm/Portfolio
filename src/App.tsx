import React,{ useState,useEffect, createContext } from 'react';
import './App.css';
import lang from './components/functions/lang';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Projetos from './pages/Projetos';
import Navbar from './components/Navbar';
import langsTypes from './components/types/langsTypes';


export const Context = React.createContext<any>({language:"pt-br",setLanguage:()=>{}});
function App() {

  const [language,setLanguage] = useState<langsTypes>(() =>{
    // Verifica o localStorage para o idioma salvo
    const savedLang = localStorage.getItem('language') as langsTypes
    return savedLang ? savedLang: 'pt-br';
  });

  useEffect(() => {
    lang(language);
    localStorage.setItem('language', language);
  }, [language]);

  
  return (
    
      <BrowserRouter>
      <Context.Provider value= {{language,setLanguage}}>
      <Navbar {...lang(language)["navBar"]}/>
      <main>

        <Routes>  
          <Route path = "/" element = {<Home  {...lang(language)["home"]} />} />
          <Route path = "/Projetos/*" element = {<Projetos projetos={lang(language)["projetos"]} default = {lang(language)["home"]["content"][4]} />}/>
        </Routes>
        
      </main>
      <Footer {...lang(language)["footer"]}/>
      </Context.Provider>
      </BrowserRouter>
    
  );
}



export default App;
