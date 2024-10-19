export class Img{
    url:string;
    alt:string;
    constructor(url:string,alt:string){
        this.url = url;
        this.alt = alt;
    }
}
export class Item{
    tema : string;
    texto: string;
    imagem:Img;
    constructor(tema:string,texto:string,imagem:Img){
        this.tema = tema;
        this.texto = texto;
        this.imagem = imagem;
    }
    
}
export class Temas{
    titulo:string;
    style:string;
    imagem?:Img;
    subtitulo?:string;
    texto?:string;
    lista?:Array<Item>;
    constructor(titulo:string,style:string,imagem?:Img,subtitulo?:string,texto?:string,lista?:Array<Item>){
        this.titulo = titulo;
        this.style = "topicos "+style;
        this.imagem = imagem;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.lista = lista;
    }
}
