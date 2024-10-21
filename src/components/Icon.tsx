import React from 'react';
import { FaGithub,FaGitAlt,FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs,FaCuttlefish ,FaJava,FaPuzzlePiece, FaInstagram,FaLinkedin } from "react-icons/fa";
import { SiTypescript,SiHandlebarsdotjs,SiDart,SiFlutter,SiExpress,SiGmail } from "react-icons/si";
import { GiBrain,GiTeamIdea } from "react-icons/gi";
import iconProps from './interfaces/iconProps';
import { JsxElement } from 'typescript';
import { IconType } from 'react-icons';

export default class Icon extends React.Component<iconProps>{
    icones: { 
        fa: { [key: string]: IconType },
        si: { [key: string]: IconType },
        gi: { [key: string]: IconType }
      } = {
        fa: {
          github: FaGithub,
          gitAlt: FaGitAlt,
          html5: FaHtml5,
          css3: FaCss3,
          javascript: FaJs,
          react: FaReact,
          nodeJs: FaNodeJs,
          cuttlefish: FaCuttlefish,
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
      };
    iconEscolhido(biblioteca:"fa"|"si"|"gi",nome:string) {
        const IconComponent: IconType | undefined = this.icones[biblioteca][nome];
    
        // Verifica se o ícone foi encontrado antes de renderizar
        if (IconComponent) {
          return (<IconComponent color={this.props.cor}/>);
        } else {
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