import React from "react";
import ContentType from "../components/types/contentType";
import  CConsole from "../components/classes/Cconsole";
import Temas from "../components/classes/Temas";
import Img from "../components/classes/Img";
import listaItem from "../components/functions/listaItem";
import { BrowserRouter, Routes,  Route ,Link  } from 'react-router-dom';

import projectProps from "../components/interfaces/projectProps";
import consoleProps from "../components/interfaces/consoleProps";
import Programa from "../components/classes/Programa";

export default class Projetos extends React.Component<ContentType["projetos"]>{
    projects = this.props.projects;
    buildProjetos(){
        const projetos:Array<{tipo:string;url?:string,programas:Array<projectProps>}> = [];
        
        this.projects.map((projeto)=>{
            const programas:Array<projectProps> = [];
            projeto.programas.forEach((element)=>{
                const resumo = element.resumo;
                const imagem = resumo.imagem?new Img({url:resumo.imagem.url,alt:resumo.imagem.alt}):undefined;
                const linguagens:Array<string> = [];
                const console:consoleProps|undefined = element.console? {
                    url:element.console?.url,
                    inputs:element.console?.inputs,
                    linguagens:linguagens
                }:undefined;
                element.console?.linguagens.forEach((ling)=>{
                    linguagens.push(ling);
                })
                programas.push({
                    url:element.url,
                    resumo:new Temas({
                        style:resumo.style,
                        titulo:resumo.titulo,
                        subtitulo:resumo.subtitulo,
                        texto:resumo.texto,
                        lista:listaItem(resumo.lista),
                        imagem: imagem,
                        key:resumo.key
                    }),
                    console:console
                })
                
                projetos.push({tipo:projeto.tipo,url:projeto.url,programas:programas})
            })
           
        })
        return projetos;
    }

    render(){
        return (
            <Routes>
                {
                    this.buildProjetos().map(projeto=>
                    <>
                        {
                            projeto.programas.map(programa=>
                                <>
                                <Route path={projeto.url + "/" + programa.url} element = {<Programa {...programa} />}/>
                                </>
                            )
                        
                        }
                    </>
                    )
                }
            </Routes>
        )
    }
}