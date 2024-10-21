import React from "react";
import itemProps from "./interfaces/itemProps";
import ItemContent from "./ItemContent";
export default class Item extends React.Component<itemProps>{
  
    render(){
        return(
            <li>
                {this.props.href?(
                    <a href={this.props.href} target="_blank">
                        <ItemContent tema =  {this.props.tema} icon= {this.props.icon} lista={this.props.lista} texto = {this.props.texto} imagem={this.props.imagem} />
                    </a>
                ):( 
                    <ItemContent tema =  {this.props.tema} icon= {this.props.icon} lista={this.props.lista} texto = {this.props.texto} imagem={this.props.imagem} />
                )}
               
            </li>
        )
    }
    
}