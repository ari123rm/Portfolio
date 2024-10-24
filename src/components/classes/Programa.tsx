import React from "react"
import projectProps from "../interfaces/projectProps";
import style from "../themes/programa.module.scss"
export default class Programa extends React.Component<projectProps>{
    render(){
        return (
            <div className={style.programa}>
                {this.props.resumo.render()}
            </div>
        )
    }
}