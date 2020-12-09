import React, {Component} from "react"

class Navlink extends Component {
    render() { 
        return ( 
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.linkUrl}>{this.props.linkName}{this.props.image}</a></li>
        );     
    }
}
 
export default Navlink;


// import React, { Component } from 'react'

// export default class NavLink extends Component {
//     render() {
//         return (
//             <li className="nav-item"> <a className="nav-link js-scroll-trigger" href={this.props.linkUrl} > {this.props.linkName} {this.props.image} </a></li>
//         );
//     }
// }

