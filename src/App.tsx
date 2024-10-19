import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topico from './components/Topico';
import {Temas} from './components/types/classes';
import { logoImg } from './components/types/imagens';
import style from './components/themes/topicos.module.scss'

function App() {
  const conteudo:Array<Temas> = [];
  conteudo.push(new Temas("Olá, sou o <br><span>Ariel Rocha de Moraes</span>",style.capa, logoImg, "Estudante de Engenharia de Computação <br> IFCE - Campus Fortaleza"));

  console.log(conteudo);
  
  return (
    <div className=''>
      <Topico titulo = {conteudo[0].titulo} style = {conteudo[0].style} imagem= {conteudo[0].imagem} subtitulo={conteudo[0].subtitulo} texto={conteudo[0].texto} lista={conteudo[0].lista} />
    </div>
  );
}

export default App;
