import React from "react";
import Temas from "../components/classes/Temas";
import Img from "../components/classes/Img";
import listaItem from "../components/functions/listaItem";
import ContentType from "../components/types/contentType";


export default class Home extends React.Component<ContentType["home"]>{
    content = this.props.content;
    buildConteudo() {
        const conteudo:Array<Temas> = [];
        this.content.forEach((tema)=>{
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
        return conteudo;
    }
    
    render(){
        return (
            <>
                {this.buildConteudo().map((temas=>temas.render()))}
            </>
        )
    }
}