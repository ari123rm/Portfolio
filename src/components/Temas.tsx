import React from "react";
import Parser from 'html-react-parser';
import temaProps from "./types/temasProps";

export default class Temas extends React.Component<temaProps>{
    itens = this.props.lista?.map((item)=>item.render())
    render(){
        return(
            <div className={"topicos " + this.props.style}>
            {(this.props.titulo != undefined) ? (
                <div>
                <h1>{Parser(this.props.titulo)}</h1>
                {this.props.subtitulo!=undefined ? (
                    <h2>{Parser(this.props.subtitulo)}</h2>
                ):( <></>  )}
                </div>
            ):( <></> ) }
            
            
            {(this.props.imagem != undefined) ? (
                <>{this.props.imagem.render()}</>
            ):(
                <></>
            )}
            {this.props.texto != undefined ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
            { (this.props.lista != undefined) ? (
                <ul>
                    {this.itens}
                </ul>
            ):(
                <>
                </>
            )}
        </div>
            
        )
    }
   
}
