import React from 'react';
import './App.css';
import Temas from './components/Temas';
import Item from './components/Item';
import { logoImg,medalhaImg,tecnologiaImg } from './components/imagens';
import style from './components/themes/topicos.module.scss'
import { FaGithub,FaGitAlt,FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaCuttlefish ,FaJava } from "react-icons/fa";
import { SiTypescript,SiHandlebarsdotjs,SiDart,SiFlutter,SiExpress } from "react-icons/si";
function App() {
  const tecnologias:Array<Item> = [new Item({tema:"Git",icon:<FaGitAlt/>}),new Item({tema:"Github",icon:<FaGithub/> }),new Item({tema:"HTML",icon:<FaHtml5/>}),new Item({tema:"CSS",icon:<FaCss3/>}),new Item({tema:"JavaScript",icon:<FaJs/>}),new Item({tema:"React",icon:<FaReact/>}),new Item({tema:"TypeScript",icon:<SiTypescript/>}),new Item({tema:"Node.js",icon:<FaNodeJs />}),new Item({tema:"Express",icon:<SiExpress/>}),new Item({tema:"HandleBars",icon:<SiHandlebarsdotjs/>}),new Item({tema:"C",icon:<FaCuttlefish />}),new Item({tema:"JAVA",icon:<FaJava/>}),new Item({tema:"Dart",icon:<SiDart/>}),new Item({tema:"Flutter",icon:<SiFlutter/>})]
  const conteudo:Array<Temas> = [];
  conteudo.push(new Temas({style: style.capa,titulo:"Olá, sou <br><span>Ariel Rocha de Moraes</span>", imagem:logoImg, subtitulo:"Estudante de Engenharia de Computação <br> IFCE - Campus Fortaleza"}));
  conteudo.push(new Temas({style:style.sobreMim,titulo:"Sobre mim:",imagem:medalhaImg,subtitulo:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio modi voluptate soluta necessitatibus totam sequi, reprehenderit animi ad blanditiis. Provident eos aspernatur suscipit, saepe laudantium quaerat nobis consequuntur odit."}))
  conteudo.push(new Temas({style:style.tecnologia,titulo:"Tecnologias Familiarizadas",lista:tecnologias,imagem:tecnologiaImg}))
  console.log(conteudo);
  const topicos = conteudo.map((topic)=>topic.render());
  return (
    <div className=''>
      {topicos} 
    </div>
  );
}

export default App;
