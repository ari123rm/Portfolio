import React from "react"
import projectProps from "../interfaces/projectProps";
import style from "../themes/programa.module.scss"
import CConsole from "./Cconsole";
export default class Programa extends React.Component<projectProps>{
    render(){
        return (
            <div className={style.programa}>
                {this.props.resumo.render()}
                {this.props["console"] ? (<CConsole {...this.props.console}/>):<></>}
            </div>
        )
    }
}