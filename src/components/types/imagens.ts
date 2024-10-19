import { Img } from "./classes";

function url(arquivo:string):string{
    return "images/" + arquivo;
}

export const logoImg:Img = new Img(url("logo.png"),"Logo");