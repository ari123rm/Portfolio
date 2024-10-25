import React from "react";
import style from "./themes/navbar.module.scss"
import NavItem from "./classes/NavItem";
import ContentType from "./types/contentType";
export default class Navbar extends React.Component<ContentType["navBar"]>{
    
    selecionado(href:string){
        const url = window.location.href.split("/").filter((element,index)=>index >= 3);
        return "/" + url.join("/") == href ? style.selecionado: "";
    }
    
    buildLinks(items:ContentType["navBar"]["links"]|undefined){
        const links:Array<NavItem> = [];
        if(!items) return [];
        
        items.map((element,index)=>{
            const classname = element.style ? style[element.style] : "";
            links.push(
                new NavItem({
                    href:element.href,
                    title:element.title,
                    style: classname + " " + this.selecionado(element.href),
                    subtitles: this.buildLinks(element.subtitles),
                    key:element.key
                })
            )
        })
        return links;
    }

    render(){
        return(
            <header className={style.navbar}>
                <ul>
                    {this.props.links?(
                        
                        <>
                            {this.buildLinks(this.props.links).map((element,index)=>element.render())}
                        </>
                            
                        ):(<></>)
                        
                    }    
                    
                </ul>
            </header>
        )
    }
}