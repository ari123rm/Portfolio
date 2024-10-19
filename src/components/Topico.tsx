import { ReactElement,useState } from "react";
import Parser from 'html-react-parser';
import {Temas} from "./types/classes";


const Topico:React.FC<Temas> = ({titulo,style,imagem,subtitulo,texto,lista})  => {
    return (
        <div className={style}>
            <div>
                <h1>{Parser(titulo)}</h1>
                {subtitulo!=undefined ? (
                    <h2>{subtitulo}</h2>
                    ):(<></>)}
            </div>
            
            {(imagem != undefined) ? (
                <img src={imagem.url} alt={imagem.alt} />
            ):(
                <></>
            )}
            {texto != undefined ? (<p>{texto}</p>):(<></>)}
            { (lista != undefined) ? (
                <ul>
                    <li>LISTA EXISTE</li>
                </ul>
            ):(
                <>
                </>
            )}
        </div>
    )
}
export default Topico