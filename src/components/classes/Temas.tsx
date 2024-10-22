import React from "react";
import Parser from 'html-react-parser';
import temaProps from "../interfaces/temasProps";
import style from '../themes/temas.module.scss'
export default class Temas extends React.Component<temaProps>{
    
    key = this.props.key ;
    setKey(newKey:number){
        this.key = newKey;
    }
    itens = this.props.lista?.map((item,index)=>{
        item.setKey(index);
        return item.render()
    })
    
    render(){
        return(
            <div className={"topicos " + style[this.props.style]} key = {this.key}>
            {(this.props.titulo) ? (
                <div>
                <h1>{Parser(this.props.titulo)}</h1>
                {this.props.subtitulo ? (
                    <h2>{Parser(this.props.subtitulo)}</h2>
                ):( <></>  )}
                {this.props.texto ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
                </div>
            ):( <></> ) }
            
            
            {(this.props.imagem ) ? (
                <>{this.props.imagem.render()}</>
            ):(
                <></>
            )}
            
            { (this.props.lista) ? (
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
