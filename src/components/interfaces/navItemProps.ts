import NavItem from "../classes/NavItem";

export default interface navItemProps{
    key?:number;
    href:string;
    title:string;
    style?:string;
    subtitles?:Array<NavItem>
}