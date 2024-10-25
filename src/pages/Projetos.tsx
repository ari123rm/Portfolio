import React from "react";
import ContentType from "../components/types/contentType";
import  CConsole from "../components/classes/Cconsole";
import Temas from "../components/classes/Temas";
import Img from "../components/classes/Img";
import listaItem from "../components/functions/listaItem";
import { Routes,  Route  } from 'react-router-dom';
import projectProps from "../components/interfaces/projectProps";
import consoleProps from "../components/interfaces/consoleProps";
import Programa from "../components/classes/Programa";

interface projetosProps{
    projetos:ContentType["projetos"];
    default:ContentType["home"]["content"][4];
}
export default class Projetos extends React.Component<projetosProps>{
    projects = this.props.projetos.projects;
    content = this.props.default;
    buildConteudo() {
        const imagem =  this.content.imagem?new Img({url: this.content.imagem.url,alt: this.content.imagem.alt}):undefined;
        return new Temas({
            style: this.content.style,
            titulo: this.content.titulo,
            subtitulo: this.content.subtitulo,
            texto: this.content.texto,
            lista:listaItem( this.content.lista),
            imagem: imagem,
            key: this.content.key
        }) ;
    }
    buildProjetos(){
        const projetos:Array<{tipo:string;url?:string,programas:Array<projectProps>,key:number}> = [];
        
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
                
                projetos.push({tipo:projeto.tipo,url:projeto.url,programas:programas,key:projeto.key})
            })
           
        })
        return projetos;
    }

    render(){
        return (
            <>
           
            <Routes>
            <>
                <Route path="/" element =  {this.buildConteudo().render()}/>
                {
                    this.buildProjetos().map((projeto,index)=>
                    <Route path={projeto.url + "/*"} key = {index} element =
                        {
                            <Routes>
                            {
                                projeto.programas.map((programa,index)=>
                                
                                    <Route path={programa.url} element = {<Programa {...programa} key = {index}/>}/>
                                    
                                )
                            }
                            </Routes>
                        }
                    />
                    )
                }
            </>
            </Routes>
            </>
        )
    }
}