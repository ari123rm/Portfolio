import React from "react";
import imgProps from "../interfaces/imgProps";
export default class Img extends React.Component<imgProps> {
  render() {
  
    return (
        <>
        <img src={require(`../../assets/${this.props.url}`)} alt={this.props.alt} />
        
        </>
    );
  }
}
