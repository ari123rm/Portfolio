import { useState } from 'react';
import './App.css';
import lang from './components/functions/lang';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes,  Route ,Link  } from 'react-router-dom';

function App() {

  const [language,setLang] = useState<"en"|"pt-br">("pt-br");
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path = "/" element = {<Home  {...lang(language)["home"]} />} />  
      </Routes>
      
    </div>
    <Footer {...lang(language)["footer"]}/>
    </BrowserRouter>
  );
}

export default App;
