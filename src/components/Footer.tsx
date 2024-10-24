import React from "react";
import style from "./themes/footer.module.scss";
import { FaPhone } from "react-icons/fa";
import ContentType from "./types/contentType";
import Item from "./classes/Item";
import Icon from "./classes/Icon";

export default class Footer extends React.Component<ContentType["footer"]>{
    contatos(conteudo:ContentType["footer"]["contatos"]){
        const contatos:Array<Item> = [];
        conteudo.forEach((contato)=>{
            const icon = contato.icon ? new Icon({biblioteca:contato.icon.biblioteca,icone:contato.icon.icone,cor:contato.icon.cor}):undefined;
            contatos.push(
              new Item({
                tema:contato.tema,
                icon:icon,
                key:contato.key,
                href:contato.href
              })
            )
        })
        return contatos;
    }

    render(){
        return(
            <footer className={"topicos "+style.rodape}>
                <h1>{this.props.titulo}</h1>
                <div>
                
                <ul>
                    {this.contatos(this.props.contatos).map((item)=> item.render())}
                </ul>
                <FaPhone/>
                </div>
                
                
                
            </footer>
        )
    }
}