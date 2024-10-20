import React from "react";
import Parser from 'html-react-parser';
import itemProps from "./types/itemProps";


export default class Item extends React.Component<itemProps>{
    
    render(){
        return(
            <li>
                <h3>{Parser(this.props.tema)}</h3>
                <div>
                    {this.props.texto != undefined ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
                    {this.props.imagem != undefined ? ( <>{this.props.imagem.render()}</>):(<></>) }
                </div>
            </li>
        )
    }
    
}