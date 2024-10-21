import { ReactNode } from "react";
import { IconBaseProps, IconType } from "react-icons";
import Img from "../Img";
import Item from "../Item";
export default interface itemProps{
    tema : string;
    texto?: string|undefined;
    icon?:undefined|IconBaseProps|ReactNode;
    imagem?:Img|undefined;
    href?:string;
    lista?:Array<Item>;
}