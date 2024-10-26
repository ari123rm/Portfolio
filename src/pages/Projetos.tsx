import React from "react";
import  CConsole from "../components/classes/Cconsole";
import Temas from "../components/classes/Temas";
import Img from "../components/classes/Img";
import listaItem from "../components/functions/listaItem";
import { Routes,  Route  } from 'react-router-dom';
import projectProps from "../components/interfaces/projectProps";
import consoleProps from "../components/interfaces/consoleProps";
import Programa from "../components/classes/Programa";
import projetosProps from "../components/interfaces/projetosProps";

const Projetos:React.FC<projetosProps> = (props) =>{
    const projects = props.projetos.projects;
    const content = props.default;
    function buildConteudo() {
        const imagem =  content.imagem?new Img({url: content.imagem.url,alt: content.imagem.alt}):undefined;
        return new Temas({
            style: content.style,
            titulo: content.titulo,
            subtitulo: content.subtitulo,
            texto: content.texto,
            lista:listaItem( content.lista),
            imagem: imagem,
            key: content.key
        }) ;
    }
    function buildProjetos(){
        const projetos:Array<{tipo:string;url?:string,programas:Array<projectProps>,key:number}> = [];
        
        projects.map((projeto)=>{
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


    return (
        <>
        
        <Routes>
        <>
            <Route path="/" element =  {buildConteudo().render()}/>
            {
                buildProjetos().map((projeto,index)=>
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
export default Projetos;