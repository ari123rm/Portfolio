import { ReactNode } from "react";
import Img from "../Img";
import { IconBaseProps, IconType } from "react-icons";
export default interface itemProps{
    tema : string;
    texto?: string|undefined;
    icon?:undefined|IconBaseProps|ReactNode;
    imagem?:Img|undefined;
}