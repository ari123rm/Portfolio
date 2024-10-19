import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topico from './components/Topico';
import {Temas} from './components/classes';
import { logoImg } from './components/imagens';

function App() {
  const conteudo:Array<Temas> = [];
  conteudo.push(new Temas("Olá, sou o Ariel Rocha de Moraes",logoImg," Engenharia de Computação do IFCE - Campus Fortaleza"));
  console.log(conteudo);
  
  return (
    <div className=''>
      <Topico titulo = {conteudo[0].titulo} imagem= {conteudo[0].imagem} subtitulo={conteudo[0].subtitulo} texto={conteudo[0].texto} lista={conteudo[0].lista} />
    </div>
  );
}

export default App;
