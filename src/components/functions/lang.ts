import ptBr from "../../assets/langs/pt-br.json"
import en from "../../assets/langs/en.json"
import ContentType from "../types/contentType";
import langsTypes from "../types/langsTypes";

export default function lang(language:langsTypes):ContentType{
    return require(`../../assets/langs/${language}.json`);
}