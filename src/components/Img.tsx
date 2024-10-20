import React from "react";
import Parser from 'html-react-parser';
import imgProps from "./types/imgProps";

export default class Img extends React.Component<imgProps>{
    render() {
        return(
            <img src={this.props.url} alt={this.props.alt}/>
        )
    }
}