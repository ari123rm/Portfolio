export default function toJson(objeto:object) {
    const json = {
        conteudo:objeto
    }
    return JSON.stringify(json);
}
