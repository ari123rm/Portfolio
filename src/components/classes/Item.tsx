import React from "react";
import itemProps from "../interfaces/itemProps";
import ItemContent from "./ItemContent";
export default class Item extends React.Component<itemProps>{
    key = this.props.key ;
    setKey(newKey:number){
        this.key = newKey;
    }
    render(){
        return(
            <li key = {this.key}>
                {this.props.href?(
                    <a href={this.props.href} target="_blank" title = {this.props.tema}>
                        <ItemContent tema =  {this.props.tema} icon= {this.props.icon} lista={this.props.lista} texto = {this.props.texto} imagem={this.props.imagem} />
                    </a>     
                ):( 
                    <ItemContent tema =  {this.props.tema} icon= {this.props.icon} lista={this.props.lista} texto = {this.props.texto} imagem={this.props.imagem} />
                )}
               
            </li>
        )
    }
    
}