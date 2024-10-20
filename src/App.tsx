import React from 'react';
import './App.css';
import Temas from './components/Temas';
import Item from './components/Item';
import { logoImg,medalhaImg } from './components/imagens';
import style from './components/themes/topicos.module.scss'

function App() {
  const tecnologias:Array<Item> = [new Item({tema:"Git"}),new Item({tema:"Github"}),new Item({tema:"HTML"}),new Item({tema:"CSS"}),new Item({tema:"JavaScript"}),new Item({tema:"React"}),new Item({tema:"TypeScript"}),new Item({tema:"Node.js"}),new Item({tema:"HandleBars"}),new Item({tema:"C"}),new Item({tema:"JAVA"}),new Item({tema:"Dart"}),new Item({tema:"Flutter"})]
  const conteudo:Array<Temas> = [];
 
  conteudo.push(new Temas({style: style.capa,titulo:"Olá, sou <br><span>Ariel Rocha de Moraes</span>", imagem:logoImg, subtitulo:"Estudante de Engenharia de Computação <br> IFCE - Campus Fortaleza"}));
  conteudo.push(new Temas({style:style.sobreMim,titulo:"Sobre mim:",imagem:medalhaImg,lista:tecnologias,subtitulo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio modi voluptate soluta necessitatibus totam sequi, reprehenderit animi ad blanditiis. Provident eos aspernatur suscipit, saepe laudantium quaerat nobis consequuntur odit."}))
  console.log(conteudo);
  const topicos = conteudo.map((topic)=>topic.render());
  return (
    <div className=''>
      {topicos} 
    </div>
  );
}

export default App;
