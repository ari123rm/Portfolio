import Temas from "../classes/Temas";
import consoleProps from "./consoleProps";

export default interface projectProps {
    url:string;
    resumo:Temas;
    console?:consoleProps
}