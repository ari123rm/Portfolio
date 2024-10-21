import Img from "./Img";

function images(arquivo:string):string{
    return "images/" + arquivo;
}
export const tecnologiaImg:Img = new Img({url:images("tecnologias.gif"),alt:"Imagem de um código"});
export const projectXImg:Img = new Img({url:images("projetoX.jpg"),alt:"Project X"});