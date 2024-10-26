import langsTypes from "./langsTypes";
type languageContextType  = {
    language: langsTypes;
    setLanguage:  React.Dispatch<React.SetStateAction<langsTypes>>;
}
export default languageContextType;