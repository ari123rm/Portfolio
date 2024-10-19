import { Img } from "./classes";

function url(arquivo:string):string{
    return "images/" + arquivo;
}

export const logoImg:Img = new Img("logo.jpg","Logo");