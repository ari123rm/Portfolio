import ptBr from "../../assets/langs/pt-br.json";
import en from "../../assets/langs/en.json";

type item = {
    key:number;
    tema:string;
    href?:string|null;
    texto?:string|null;
    icon?:{
        biblioteca:string;
        icone:string;
        cor?:string
    }|null
    imagem?:{
        url:string;
        alt:string;
    }|null
    lista?:Array<item>|null;
}
type tema = {
    key:number;
    style:string;
    titulo:string;
    subtitulo?:string|null;
    texto?:string|null;
    imagem?:{
        url:string;
        alt:string;
    }|null
    lista?:Array<item>|null
}
type Home = {
    content : Array<tema>
}
type projetos = {
    resumo:tema;
}

type ContentType = {
    home: Home;
    projetos:{
        projetosC?:projetos|null
    }
    footer:{
        titulo:string;
        contatos:Array<item>
    }

};

export default ContentType;