import React from 'react';
import './App.css';

import content from './assets/langs/en.json'
import Img from './components/Img';
import Icon from './components/Icon';
import Temas from './components/Temas';
import Item from './components/Item';
import Footer from './components/Footer';
import listaItem from './components/listaItem';
function App() {

  const conteudo:Array<Temas> = [];
  content.home.forEach((tema)=>{
    const imagem = tema.imagem?new Img({url:tema.imagem.url,alt:tema.imagem.alt}):undefined;
    conteudo.push(
      new Temas({
        style:tema.style,
        titulo:tema.titulo,
        subtitulo:tema.subtitulo,
        texto:tema.texto,
        lista:listaItem(tema.lista),
        imagem: imagem,
        key:tema.key}
      ));
  });
  const contatos:Array<Item> = [];
  content.footer.contatos.forEach((contato)=>{
    const icon = new Icon({biblioteca:contato.icon.biblioteca,icone:contato.icon.icone,cor:contato.icon.cor});
    contatos.push(
      new Item({
        tema:contato.tema,
        icon:icon,
        key:contato.key,
        href:contato.href
      })
    )
  })
  return (
    <>
    <div>
      {conteudo.map((topic)=>topic.render())}
    </div>
    <Footer titulo={content.footer.titulo} contatos = {contatos}/>
    </>
  );
}

export default App;
