import React from 'react';
import { FaGithub,FaGitAlt,FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaJava,FaPuzzlePiece, FaInstagram,FaLinkedin } from "react-icons/fa";
import { SiTypescript,SiHandlebarsdotjs,SiDart,SiFlutter,SiExpress,SiGmail } from "react-icons/si";
import { GiBrain,GiTeamIdea } from "react-icons/gi";
import iconProps from '../interfaces/iconProps';
import { PiFileCFill } from "react-icons/pi";
import { IconType } from 'react-icons';
import Img from './Img';

export default class Icon extends React.Component<iconProps>{
    icones: { 
        fa: { [key: string]: IconType },
        si: { [key: string]: IconType },
        gi: { [key: string]: IconType },
        pi: { [key: string]: IconType },
        img: {[key:string]: Img}
      } = {
        fa: {
          github: FaGithub,
          gitAlt: FaGitAlt,
          html5: FaHtml5,
          css3: FaCss3,
          javascript: FaJs,
          react: FaReact,
          nodeJs: FaNodeJs,
          
          java: FaJava,
          puzzlePiece: FaPuzzlePiece,
          instagram: FaInstagram,
          linkedin: FaLinkedin,
        },
        si: {
          typescript: SiTypescript,
          handlebars: SiHandlebarsdotjs,
          dart: SiDart,
          flutter: SiFlutter,
          express: SiExpress,
          gmail: SiGmail,
        },
        gi: {
          brain: GiBrain,
          teamIdea: GiTeamIdea,
        },
        pi:{
            c:PiFileCFill,
        },
        img:{
            lattes: new Img({url: "icons/lattes.png", alt:"Lattes"}),
        }
      };
    iconEscolhido(biblioteca:string,nome:string) {
        let IconComponent: IconType |undefined = undefined;
        let ImgComponent:Img|undefined = undefined;
        if(biblioteca == "img"){
            ImgComponent =  this.icones[biblioteca][nome];
        }else{
            switch(biblioteca){
                case "fa":
                case "si":
                case "gi":
                case "pi":
                    IconComponent =  this.icones[biblioteca][nome];
                    break;
                default:
                    break;
            }
            
        }
        
        
        // Verifica se o ícone foi encontrado antes de renderizar
        if (IconComponent) {
            return (
                <IconComponent color={this.props.cor}/>
                
            );
        } else if(ImgComponent){
            return (
                <>
                    {ImgComponent.render()}
                </>
            )
        }else{
          return (<p>Ícone não encontrado!</p>);
        }
    }
    
    render(){
        return (
            <>
            {this.iconEscolhido(this.props.biblioteca,this.props.icone)}
            </>
        )
    }
}