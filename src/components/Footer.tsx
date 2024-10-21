import React from "react";
import footerProps from "./interfaces/footerProps";
import style from "./themes/footer.module.scss";
import { FaPhone } from "react-icons/fa";
export default class Footer extends React.Component<footerProps>{
    contact = this.props.contatos?.map((item,index)=>{
        item.setKey(index);
        return item.render()
    })
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