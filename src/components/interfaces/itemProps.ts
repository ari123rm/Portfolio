import Img from "../classes/Img";
import Item from "../classes/Item";
import Icon from "../classes/Icon";
export default interface itemProps{
    tema : string;
    key?:number ;
    texto?: string|undefined;
    icon?:Icon;
    imagem?:Img|undefined;
    href?:string;
    lista?:Array<Item>;
}