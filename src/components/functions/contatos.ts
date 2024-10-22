import Icon from "../classes/Icon";
import Item from "../classes/Item";
import ContentType from "../types/contentType";

export default function contatos(conteudo:ContentType["footer"]["contatos"]){
    const contatos:Array<Item> = [];
    conteudo.forEach((contato)=>{
        const icon = new Icon({biblioteca:contato.icon.biblioteca,icone:contato.icon.icone,cor:contato.icon.cor});
        contatos.push(
          new Item({
            tema:contato.tema,
            icon:icon,
            key:contato.key,
            href:contato.href
          })
        )
    })
    return contatos;
}