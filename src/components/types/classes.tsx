import React from "react";
import Parser from 'html-react-parser';

export class Img{
    url:string;
    alt:string;
    constructor(url:string,alt:string){
        this.url = url;
        this.alt = alt;
    }
}
export class Item{
    tema : string;
    texto: string;
    imagem:Img;
    constructor(tema:string,texto:string,imagem:Img){
        this.tema = tema;
        this.texto = texto;
        this.imagem = imagem;
    }
    
}
type props = {
    titulo:string;
    style:string;
    imagem?:Img|undefined;
    subtitulo?:string|undefined;
    texto?:string|undefined;
    lista?:Array<Item>|undefined;
}
export class Temas extends React.Component<props>{
    
    render(){
        return(
            <div className={"topicos " + this.props.style}>
            <div>
                <h1>{Parser(this.props.titulo)}</h1>
                {this.props.subtitulo!=undefined ? (
                    <h2>{Parser(this.props.subtitulo)}</h2>
                    ):(<></>)}
            </div>
            
            {(this.props.imagem != undefined) ? (
                <img src={this.props.imagem.url} alt={this.props.imagem.alt} />
            ):(
                <></>
            )}
            {this.props.texto != undefined ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
            { (this.props.lista != undefined) ? (
                <ul>
                    <li>LISTA EXISTE</li>
                </ul>
            ):(
                <>
                </>
            )}
        </div>
            
        )
    }
   
}
