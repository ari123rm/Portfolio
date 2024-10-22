import React, { useState } from 'react';
import './App.css';
import lang from './components/functions/lang';


import Home from './pages/Home';
import Footer from './components/Footer';

function App() {

  const [language,setLang] = useState<"en"|"pt-br">("pt-br");
  
  return (
    <>
    <div>
      <Home  {...lang(language)["home"]} />
    </div>
    <Footer {...lang(language)["footer"]}/>
    </>
  );
}

export default App;
