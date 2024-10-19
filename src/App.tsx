import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Temas} from './components/types/classes';
import { logoImg } from './components/types/imagens';
import style from './components/themes/topicos.module.scss'

function App() {
  const conteudo:Array<Temas> = [];
  conteudo.push(new Temas({titulo:"Olá, sou <br><span>Ariel Rocha de Moraes</span>",style: style.capa, imagem:logoImg, subtitulo:"Estudante de Engenharia de Computação <br> IFCE - Campus Fortaleza"}));
  console.log(conteudo);

  return (
    <div className=''>
      {conteudo[0].render()}
    </div>
  );
}

export default App;
