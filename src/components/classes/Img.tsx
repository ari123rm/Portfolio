import React from "react";
import imgProps from "../interfaces/imgProps";
import imagempoggers from "../../assets/images/home/logo.png"
export default class Img extends React.Component<imgProps> {
  render() {
  
    return (
        <>
        <img src={require(`../../assets/${this.props.url}`)} alt={this.props.alt} />
        
        </>
    );
  }
}
