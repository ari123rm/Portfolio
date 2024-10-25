import Img from "../classes/Img";
import Item from "../classes/Item";
import Icon from "../classes/Icon";
export default interface itemProps{
    tema : string;
    key:number ;
    texto?: string|undefined|null;
    icon?:Icon|null;
    imagem?:Img|undefined|null;
    href?:string|null;
    target?:string|null;
    lista?:Array<Item>|null;
}