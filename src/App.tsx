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

  const [language,setLanguage] = useState<langsTypes>("pt-br");

  useEffect(() => {
    lang(language);
    console.log(language)
  }, [language]);

  
  return (
    
      <BrowserRouter>
      <Context.Provider value= {{language,setLanguage}}>
      <Navbar {...lang(language)["navBar"]}/>
      <div>

        <Routes>  
          <Route path = "/" element = {<Home  {...lang(language)["home"]} />} />
          <Route path = "/Projetos/*" element = {<Projetos projetos={lang(language)["projetos"]} default = {lang(language)["home"]["content"][4]} />}/>
        </Routes>
        
      </div>
      <Footer {...lang(language)["footer"]}/>
      </Context.Provider>
      </BrowserRouter>
    
  );
}



export default App;
