import React from "react";
import footerProps from "./interfaces/footerProps";
import style from "./themes/footer.module.scss";
import { FaPhone } from "react-icons/fa";
import ContentType from "./types/contentType";
import contatos from "./functions/contatos";
export default class Footer extends React.Component<ContentType["footer"]>{

    contact = contatos(this.props.contatos).map((item)=> item.render());

    render(){
        return(
            <footer className={"topicos "+style.rodape}>
                <h1>{this.props.titulo}</h1>
                <div>
                
                <ul>
                    {this.contact}
                </ul>
                <FaPhone/>
                </div>
                
                
                
            </footer>
        )
    }
}