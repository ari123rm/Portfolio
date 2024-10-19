import { ReactElement,useState } from "react";

import {Temas} from "./classes";


const Topico:React.FC<Temas> = ({titulo,imagem,subtitulo,texto,lista})  => {
    return (
        <div>
            <h1>{titulo}</h1>
            {subtitulo!=undefined ? (
                <h2>{subtitulo}</h2>
                ):(<></>)}
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