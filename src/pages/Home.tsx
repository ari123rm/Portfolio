import React, { useContext } from "react";
import Temas from "../components/classes/Temas";
import Img from "../components/classes/Img";
import listaItem from "../components/functions/listaItem";
import ContentType from "../components/types/contentType";
import { Context } from "../App";

const Home:React.FC<ContentType["home"]> = (props) =>{
    const {language} = useContext(Context)
    const content = props.content;
    function buildConteudo() {
        const conteudo:Array<Temas> = [];
        content.forEach((tema)=>{
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
    
    
    return (
        <>
            {buildConteudo().map((temas=>temas.render()))}
        </>
    )
    
}
export default Home;