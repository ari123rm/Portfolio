class Img{
    url:string;
    alt:string;
    constructor(url:string,alt:string){
        this.url = url;
        this.alt = alt;
    }
}
class Item{
    tema : string;
    texto: string;
    imagem:Img;
    constructor(tema:string,texto:string,imagem:Img){
        this.tema = tema;
        this.texto = texto;
        this.imagem = imagem;
    }
    
}
class Temas{
    titulo:string;
    imagem?:Img;

    subtitulo?:string;
    texto?:string;
    lista?:Array<Item>;
    constructor(titulo:string,imagem:Img,subtitulo?:string,texto?:string,lista?:Array<Item>){
        this.titulo = titulo
        this.imagem = imagem;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.lista = lista;
    }
}

export {Temas,Item,Img};