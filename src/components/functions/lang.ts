import ptBr from "../../assets/langs/pt-br.json"
import en from "../../assets/langs/en.json"
import ContentType from "../types/contentType";

export default function lang(language:"en"|"pt-br"){
    let linguaSelecionada:ContentType;
    switch(language){
        case "pt-br":
            linguaSelecionada = ptBr;
            break;
        case "en":
            linguaSelecionada = en;
            break;
    }
    return linguaSelecionada;
}