import React from "react";
import itemProps from "../interfaces/itemProps";
import Parser from 'html-react-parser';
export default class ItemContent extends React.Component<itemProps>{
    itens = this.props.lista?.map((item)=>item.render())
    render(){
        return(
            <>
            {this.props.icon  ? (<>{this.props.icon.render()}</>):(<></>)}         
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
        )
    }
}