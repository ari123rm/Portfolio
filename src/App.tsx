import React from 'react';
import logo from './logo.svg';
import './App.css';
import Temas from './components/Temas';
import { logoImg } from './components/imagens';
import style from './components/themes/topicos.module.scss'

function App() {
  const conteudo:Array<Temas> = [];
  conteudo.push(new Temas({style: style.capa,titulo:"Olá, sou <br><span>Ariel Rocha de Moraes</span>", imagem:logoImg, subtitulo:"Estudante de Engenharia de Computação <br> IFCE - Campus Fortaleza"}));
  conteudo.push(new Temas({style:style.sobreCapa}))
  console.log(conteudo);
  const topicos = conteudo.map((topic)=>topic.render());
  return (
    <div className=''>
      {topicos}
    </div>
  );
}

export default App;
