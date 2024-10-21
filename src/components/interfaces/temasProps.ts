import Img from "../Img";
import Item from "../Item";

export default interface temaProps{
    style:string;
    titulo?:string|undefined;
    imagem?:Img|undefined;
    subtitulo?:string|undefined;
    texto?:string|undefined;
    lista?:Array<Item>|undefined;
}

