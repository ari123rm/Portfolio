import Img from "../Img";
import Item from "../Item";
import Icon from "../Icon";
export default interface itemProps{
    tema : string;
    key?:number ;
    texto?: string|undefined;
    icon?:Icon;
    imagem?:Img|undefined;
    href?:string;
    lista?:Array<Item>;
}