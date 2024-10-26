export type item = {
    key:number;
    tema:string;
    href?:string|null;
    target?:string|null;
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
export type tema = {
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
export  type Home = {
    content : Array<tema>
}
export type projetos = {
    url:string;
    resumo:tema;
    console?:{
        url:string;
        linguagens:Array<string>;
        inputs?:string;
    }
}

export type navBarItem = {
    key?:number;
    href:string;
    title:string;
    style?:string;
    subtitles?:Array<navBarItem>;
}

export type lang ={
    key?:number;
    nome:string;
    emoji:string;
    value:string;
}
type ContentType = {
    navBar:{
        links:Array<navBarItem>
        seletorLang:{
            label:string;
            langs:Array<lang>
        }
    }
    home: Home;
    projetos:{
        projects :Array<{
            key:number;
            tipo:string;
            url?:string;
            programas:Array<projetos>
        }>
    }
    footer:{
        titulo:string;
        contatos:Array<item>
    }

};

export default ContentType;