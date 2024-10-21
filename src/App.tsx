import React from 'react';
import './App.css';
import Temas from './components/Temas';
import Item from './components/Item';
import { logoImg,medalhaImg,tecnologiaImg, projectXImg } from './components/imagens';
import style from './components/themes/topicos.module.scss'
import { FaGithub,FaGitAlt,FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaCuttlefish ,FaJava,FaPuzzlePiece  } from "react-icons/fa";
import { SiTypescript,SiHandlebarsdotjs,SiDart,SiFlutter,SiExpress } from "react-icons/si";
import { GiBrain,GiTeamIdea } from "react-icons/gi";

function App() {
  const tecnologias:Array<Item> = [new Item({tema:"Git",icon:<FaGitAlt/>}),new Item({tema:"Github",icon:<FaGithub/> }),new Item({tema:"HTML",icon:<FaHtml5/>}),new Item({tema:"CSS",icon:<FaCss3/>}),new Item({tema:"JavaScript",icon:<FaJs/>}),new Item({tema:"React",icon:<FaReact/>}),new Item({tema:"TypeScript",icon:<SiTypescript/>}),new Item({tema:"Node.js",icon:<FaNodeJs />}),new Item({tema:"Express",icon:<SiExpress/>}),new Item({tema:"HandleBars",icon:<SiHandlebarsdotjs/>}),new Item({tema:"C",icon:<FaCuttlefish />}),new Item({tema:"JAVA",icon:<FaJava/>}),new Item({tema:"Dart",icon:<SiDart/>}),new Item({tema:"Flutter",icon:<SiFlutter/>})]
  const habilidades:Array<Item> = [new Item({tema:"Criatividade",icon:<GiBrain/>,texto:"Gosto de explorar novas abordagens e pensar de forma original para superar desafios de maneira eficiente."}),new Item({tema:"Resolução de problemas",icon:<FaPuzzlePiece />,texto:"Desde pequeno fui incentivado a procurar as melhores soluções dos problemas, me rendendo premiações em olimpíadas de conhecimento."}),new Item({tema:"Trabalho em Equipe",texto:"Sou colaborativo, sempre busco contribuir para o sucesso da equipe. Minha flexibilidade e foco em resultados coletivos fazem de mim um parceiro valioso em qualquer grupo.",icon:<GiTeamIdea/>})]
  const projetos:Array<Item> = []
  for(let i:number = 0;i<10;i++){
    projetos.push(new Item({tema:"Projeto X",imagem: projectXImg ,href:"/", texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ea sapiente totam corrupti illo obcaecati recusandae! Minus explicabo assumenda iste.",lista:[tecnologias[5],tecnologias[6]]}));
  }
 
  const conteudo:Array<Temas> = [];
  conteudo.push(new Temas({style: style.capa,titulo:"Olá, sou <br><span>Ariel Rocha de Moraes</span>", imagem:logoImg, subtitulo:"Estudante de Engenharia de Computação <br> IFCE - Campus Fortaleza"}));
  conteudo.push(new Temas({style:style.sobreMim,titulo:"Sobre mim:",imagem:medalhaImg,subtitulo:"Sou apaixonado por matemática e jogos. Desde pequeno, tenho afinidade em resolução de problemas com lógica e matemática, e naturalmente, me encantei pela computação."}))
  conteudo.push(new Temas({style:style.tecnologia,titulo:"Tecnologias Familiarizadas",lista:tecnologias,imagem:tecnologiaImg}))
  conteudo.push(new Temas({style:style.habilidades,titulo:"Habilidades Interpessoais",lista :habilidades}))
  conteudo.push(new Temas({style:style.projetos,titulo:"Projetos",lista:projetos}))
  console.log(conteudo);
  const topicos = conteudo.map((topic)=>topic.render());
  return (
    <div className=''>
      {topicos} 
    </div>
  );
}

export default App;
