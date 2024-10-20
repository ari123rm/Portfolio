import Img from "./Img";

function url(arquivo:string):string{
    return "images/" + arquivo;
}

export const logoImg:Img = new Img({url:url("logo.png"),alt:"Logo"});
export const medalhaImg:Img = new Img({url:url("medalha.jpeg"),alt:"Medalha de Ouro OBMEP 2019"});