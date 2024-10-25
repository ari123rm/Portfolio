import Item from "../classes/Item";
import Img from "../classes/Img";
import Icon from "../classes/Icon";
import { item } from "../types/contentType";
export default function listaItem(items:Array<item>|null|undefined){
    if(!items)return undefined;
    const array:Array<Item> = [];
    
    items.forEach((item)=>{
        let list:Array<Item>|undefined = undefined ;
        if(item.lista){
           list = listaItem(item.lista);
        }
        const imagem = item.imagem? new Img({url:item.imagem.url,alt:item.imagem.alt}):undefined;
        const icon = item.icon? new Icon({biblioteca:item.icon.biblioteca,icone:item.icon.icone,cor:item.icon.cor}):undefined;
        array.push(new Item({tema:item.tema,key:item.key ,texto:item.texto , href:item.href,target:item.target, icon:icon,imagem:imagem,lista:list}))
    })
    return array;
}