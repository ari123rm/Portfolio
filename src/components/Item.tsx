import React from "react";
import Parser from 'html-react-parser';
import itemProps from "./types/itemProps";

export default class Item extends React.Component<itemProps>{
    
    render(){
        return(
            <li>
                {this.props.icon  ? (<>{this.props.icon}</>):(<></>)}
                
                <div>
                    <h3>{Parser(this.props.tema)}</h3>
                    {this.props.texto  ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
                    
                </div>
                {this.props.imagem ? ( <> {this.props.imagem.render()}</>):(<></>) }
            </li>
        )
    }
    
}