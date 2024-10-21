import React from "react";
import Parser from 'html-react-parser';
import itemProps from "./types/itemProps";

export default class Item extends React.Component<itemProps>{
    itens = this.props.lista?.map((item)=>item.render())
    render(){
        return(
            <li>
                {this.props.href?(
                    <a href={this.props.href}>
                        {this.props.icon  ? (<>{this.props.icon}</>):(<></>)}
                    
                        <div>
                            <h3>{Parser(this.props.tema)}</h3>
                            {this.props.texto  ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
                            {this.props.lista?(
                            <ul>
                                {this.itens}
                            </ul>
                        ):(<></>)}
                        </div>
                        {this.props.imagem ? ( <> {this.props.imagem.render()}</>):(<></>) }
                        
                    </a>
                ):( 
                    <>
                        {this.props.icon  ? (<>{this.props.icon}</>):(<></>)}
                        
                        <div>
                            <h3>{Parser(this.props.tema)}</h3>
                            {this.props.texto  ? (<p>{Parser(this.props.texto)}</p>):(<></>)}
                            {this.props.lista?(
                                <ul>
                                    {this.itens}
                                </ul>
                            ):(<></>)}
                        </div>
                        {this.props.imagem ? ( <> {this.props.imagem.render()}</>):(<></>) }
                        
                    </> 
                )}
               
            </li>
        )
    }
    
}