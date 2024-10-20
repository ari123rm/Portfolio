import Img from "./Img";

function url(arquivo:string):string{
    return "images/" + arquivo;
}

export const logoImg:Img = new Img({url:url("logo.png"),alt:"Logo"});