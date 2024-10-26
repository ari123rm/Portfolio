import React, { useContext } from "react";
import style from "./themes/navbar.module.scss"
import NavItem from "./classes/NavItem";
import ContentType from "./types/contentType";
import langsTypes from "./types/langsTypes";
import { Context } from "../App";
import Img from "./classes/Img";
const Navbar:React.FC<ContentType["navBar"]> = (props)=>{
    const {language,setLanguage} = useContext(Context);

    function selecionado(href:string){
        const url = window.location.href.split("/").filter((element,index)=>index >= 3);
        return "/" + url.join("/") == href ? style.selecionado: "";
    }
    function buildLinks(items:ContentType["navBar"]["links"]|undefined){
        const links:Array<NavItem> = [];
        if(!items) return [];
        
        items.map((element,index)=>{
            const classname = element.style ? style[element.style] : "";
            links.push(
                new NavItem({
                    href:element.href,
                    title:element.title,
                    style: classname + " " + selecionado(element.href),
                    subtitles: buildLinks(element.subtitles),
                    key:element.key
                })
            )
        })
        return links;
    }

    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        
        const selectedLanguage = event.target.value as langsTypes;
        setLanguage(selectedLanguage);
        
        // Aqui você pode definir a lógica para redirecionar ou carregar conteúdos específicos
        console.log(`Idioma selecionado: ${selectedLanguage}`);
        // Exemplo de redirecionamento:
        // window.location.href = `/${selectedLanguage}`;
    }
    return(
        <header className={style.navbar}>
            <ul>
                {props.links?(
                    
                    <>
                        {buildLinks(props.links).map((element,index)=>element.render())}
                    </>
                        
                    ):(<></>)
                    
                }    
            </ul>
            <div className={style.idiomas}>
                <label htmlFor="language">{language? new Img({url:`icons/${language}.png`,alt:language}).render(): "🌐" } {props.seletorLang.label}</label>
                <select id="language" onChange={handleChange} defaultValue={language}>
                    {   props.seletorLang.langs.map(element =>
                        <option key={element.key} value={element.value} ><div><i></i><p>{element.nome}</p> </div></option>
                    )}
                </select>
            </div>
        </header>
    )
    
}
export default Navbar