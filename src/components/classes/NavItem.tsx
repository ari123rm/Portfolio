import React from "react";
import navItemProps from "../interfaces/navItemProps"
export default class NavItem extends React.Component<navItemProps>{
    render(){
        return (
            <li key={this.props.key} className={this.props.style}>
                <a href={this.props.href} ><h1>{this.props.title}</h1></a>
                {this.props.subtitles ? 
                    <ul>
                        {this.props.subtitles.map(element=>element.render())}
                    </ul>
                    :<></>}
            </li>
        )
    }
}