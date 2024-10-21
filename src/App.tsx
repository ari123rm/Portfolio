import React from 'react';
import './App.css';
import Temas from './components/Temas';
import Item from './components/Item';
import {tecnologiaImg, projectXImg  } from './components/imagens';
import style from './components/themes/topicos.module.scss'
import Footer from './components/Footer';
import toJson from './assets/toJson';
import content from './assets/langs/pt-bt.json'
import Img from './components/Img';
import listaItem from './components/listaItem';
import Icon from './components/Icon';
function App() {
  const tecnologias: Array<Item> = [
    new Item({ tema: "Git", icon: new Icon({ biblioteca: "fa", icone: "gitAlt" }) }),
    new Item({ tema: "Github", icon: new Icon({ biblioteca: "fa", icone: "github" }) }),
    new Item({ tema: "HTML", icon: new Icon({ biblioteca: "fa", icone: "html5" }) }),
    new Item({ tema: "CSS", icon: new Icon({ biblioteca: "fa", icone: "css3" }) }),
    new Item({ tema: "JavaScript", icon: new Icon({ biblioteca: "fa", icone: "javascript" }) }),
    new Item({ tema: "React", icon: new Icon({ biblioteca: "fa", icone: "react" }) }),
    new Item({ tema: "TypeScript", icon: new Icon({ biblioteca: "si", icone: "typescript" }) }),
    new Item({ tema: "Node.js", icon: new Icon({ biblioteca: "fa", icone: "nodeJs" }) }),
    new Item({ tema: "Express", icon: new Icon({ biblioteca: "si", icone: "express" }) }),
    new Item({ tema: "HandleBars", icon: new Icon({ biblioteca: "si", icone: "handlebars" }) }),
    new Item({ tema: "C", icon: new Icon({ biblioteca: "fa", icone: "cuttlefish" })}),
    new Item({ tema: "JAVA", icon: new Icon({ biblioteca: "fa", icone: "java" }) }),
    new Item({ tema: "Dart", icon: new Icon({ biblioteca: "si", icone: "dart" }) }),
    new Item({ tema: "Flutter", icon: new Icon({ biblioteca: "si", icone: "flutter" }) })
  ];
  const habilidades: Array<Item> = [
    new Item({ 
      tema: "Criatividade", 
      icon: new Icon({ biblioteca: "gi", icone: "brain" }), 
      texto: "Gosto de explorar novas abordagens e pensar de forma original para superar desafios de maneira eficiente." 
    }),
    new Item({ 
      tema: "Resolução de problemas", 
      icon: new Icon({ biblioteca: "fa", icone: "puzzlePiece" }), 
      texto: "Desde pequeno fui incentivado a procurar as melhores soluções dos problemas, me rendendo premiações em olimpíadas de conhecimento." 
    }),
    new Item({ 
      tema: "Trabalho em Equipe", 
      icon: new Icon({ biblioteca: "gi", icone: "teamIdea" }), 
      texto: "Sou colaborativo, sempre busco contribuir para o sucesso da equipe. Minha flexibilidade e foco em resultados coletivos fazem de mim um parceiro valioso em qualquer grupo." 
    })
  ];
  const contatos: Array<Item> = [
    new Item({ 
      tema: "ari123rm", 
      href: "https://github.com/ari123rm", 
      icon: new Icon({ biblioteca: "fa", icone: "github" })
    }),
    new Item({ 
      tema: "arielmoraes05@gmail.com", 
      href: "mailto:arielmoraes05@gmail.com", 
      icon: new Icon({ biblioteca: "si", icone: "gmail", cor: 'red' })
    }),
    new Item({ 
      tema: "Ariel Rocha de Moraes", 
      href: "https://www.linkedin.com/in/ariel-rocha-de-moraes-1653132a0/", 
      icon: new Icon({ biblioteca: "fa", icone: "linkedin", cor: "#0e76a8" })
    }),
    new Item({ 
      tema: "Lattes", 
      href: "http://lattes.cnpq.br/7435278675589514", 
      icon: new Icon({ biblioteca: "img", icone: "lattes"})
    })
  ];
    const projetos:Array<Item> = []
  for(let i:number = 0;i<10;i++){
    projetos.push(new Item({tema:"Projeto X",imagem: projectXImg ,href:"/", texto:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ea sapiente totam corrupti illo obcaecati recusandae! Minus explicabo assumenda iste.",lista:[tecnologias[5],tecnologias[6]]}));
  }
  const conteudo:Array<Temas> = [];
  content.conteudo.forEach((tema)=>{
    conteudo.push(
      new Temas({
        style:tema.style,
        titulo:tema.titulo,
        subtitulo:tema.subtitulo,
        texto:tema.texto,
        lista:listaItem(tema.lista),
        imagem:new Img({url:tema.imagem.url,alt:tema.imagem.alt}),
        key:tema.key}
      ));
  })
  conteudo.push(new Temas({style:style.tecnologia,titulo:"Tecnologias Familiarizadas",lista:tecnologias,imagem:tecnologiaImg}))
  conteudo.push(new Temas({style:style.habilidades,titulo:"Habilidades Interpessoais",lista :habilidades}))
  conteudo.push(new Temas({style:style.projetos,titulo:"Meus Projetos",lista:projetos}))
  console.log(toJson(conteudo[1]))

  const topicos = conteudo.map((topic,index)=>{
    topic.setKey(index);
    return topic.render()
  });
  return (
    <>
    <div>
      {topicos}
    </div>
    <Footer titulo='Meus Contatos' contatos = {contatos}/>
    </>
  );
}

export default App;
