import itemProps from "./interfaces/itemProps";
import Item from "./Item";
import Img from "./Img";
export default function listaItem(items:Array<any>){
    const array:Array<Item> = [];
    
    items.forEach((item)=>{
        let list:Array<Item> = [];
        if(item.lista){
           list = listaItem(item.lista) 
        }
        let imagem = item.imagem? new Img({url:item.imagem.url,alt:item.imagem.alt}):undefined;
        array.push(new Item({tema:item.tema,key:item.key, icon:item.icon ,texto:item.texto , href:item.href,imagem:imagem,lista:list}))
    })
    return array;
}