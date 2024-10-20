import Img from "./Img";

function images(arquivo:string):string{
    return "images/" + arquivo;
}

export const logoImg:Img = new Img({url:images("logo.png"),alt:"Logo"});
export const medalhaImg:Img = new Img({url:images("medalha.jpeg"),alt:"Medalha de Ouro OBMEP 2019"});
export const tecnologiaImg:Img = new Img({url:images("tecnologias.gif"),alt:"Imagem de um código"});
export const projectXImg:Img = new Img({url:images("projetoX.jpg"),alt:"Project X"});