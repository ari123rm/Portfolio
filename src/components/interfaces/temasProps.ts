import Img from "../Img";
import Item from "../Item";

export default interface temaProps{
    style:string;
    titulo:string;
    imagem?:Img|null;
    subtitulo?:string|null;
    texto?:string|null;
    lista?:Array<Item>|null;
    key?:number|null;
}

