import React from "react";
import style from "./themes/navbar.module.scss"
export default class Navbar extends React.Component{
    
    
    
    render(){
        return(
            <header className={style.navbar}>
                <ul>
                    <li><a href="/"><h1>Home</h1></a></li>
                    <li className={style.projetos}>
                        <a href="Projetos" ><h1>Projetos</h1></a>
                        <ul>
                            <li><a href="Projetos/programas-em-c/sudoku">Sudoku</a></li>
                        </ul>
                    </li>
                    
                </ul>
            </header>
        )
    }
}