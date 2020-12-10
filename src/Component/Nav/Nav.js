import React, {Component} from 'react'
import './Nav.css';

class Nav extends Component {
    componentDidMount(){
            const selectElement = (element) =>document.querySelector(element);

            selectElement('.mobile-menu').addEventListener('click' , ()=>{
            selectElement('header').classList.toggle('active')
            })
    }
       render() { 
            return ( 
        <header>
        <div className="container2">
            <nav>
                <ul className="nav-list nav-list-mobile">
                    <li className="nav-item">
                        <div className="mobile-menu">
                            <span className="line line-top"></span>
                            <span className="line line-bottom"></span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="index.html" className="nav-link nav-link-apple"></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                   
                </ul>
                {/* <!-- /.nav-list nav-list-mobile -->  */}
                <ul className="nav-list nav-list-larger">
                    <li className="nav-item search-hiden">
                      
                        <input className="nav-link nav-link-searchbar" type="text" 
                            placeholder="&#xF002; Search apple.com" 
                            style={{fontFamily:"Arial, FontAwesome"}} />
                      
                    </li>
                    <li className="nav-item nav-item-hidden">
                        <a href="/" className="nav-link nav-link-apple"></a>
                    </li>
                    <li className="nav-item">
                        <a href="mac" className="nav-link">Mac</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">iPad</a>
                    </li>
                    <li className="nav-item">
                        <a href="iphone" className="nav-link">iPhone</a>
                    </li>
                    <li className="nav-item">
                        <a href="watch" className="nav-link">Watch</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">TV</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Music</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Support</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-link-search"></a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-link nav-link-bag"></a>
                    </li>
                  
                </ul> 
                    
            </nav>

        </div>
    </header>
    )
    }
}
 
export default Nav;




