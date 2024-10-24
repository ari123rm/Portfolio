import React from "react";
import ContentType from "../components/types/contentType";
import  CConsole from "../components/classes/Cconsole";
import Temas from "../components/classes/Temas";
export default class Projetos extends React.Component<ContentType["projetos"]>{
   

    render(){
        const { projetosC } = this.props;

        return(
            <>
            {projetosC != undefined ? (<> <Temas style = {projetosC.resumo.style} titulo={projetosC.resumo.titulo} /></>): ( <></>)
            }
            </>
        )
    }
}