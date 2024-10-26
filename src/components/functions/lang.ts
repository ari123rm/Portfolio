import ContentType from "../types/contentType";
import langsTypes from "../types/langsTypes";

export default function lang(language:langsTypes):ContentType{
    return require(`../../assets/langs/${language}.json`);
}