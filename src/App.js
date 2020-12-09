import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// BrowserRouter
	// To add the ability to add routing functionality 
// Switch
	// Checks provided paths and stops checking all as soon as it finds a match 
// Route
	// Renders components based on the URL
// Home page
import Nav from './Component/Nav/Nav'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'
//import Youtube from './Component/Youtube/Youtube';

// Pages
import Iphone from './Pages/Iphone/iphone';
import Four04 from './Pages/Four04/Four04';
import Mac from './Pages/Mac/Mac';
import Ipad from './Pages/Ipad/ipad';
import Music from './Pages/Music/Music';
import Support from './Pages/Support/Support';
import Tv from './Pages/Tv/tv';
import Watch from './Pages/Watch/Watch';
import Productpage from './Pages/Productpage/Productpage';
import Youtube from './Component/Youtube/Youtube';

import "./App.css";

class App extends Component {
  
  render () {
    return (
      <Router>
		    <div>
		      <Nav /> 
		      <Switch>
			      <Route path="/" exact component={Main} /> 
			      <Route path="/iphone" exact component={Iphone}/>
			      <Route path="/mac" exact component={Mac}/>
				  <Route path="/Watch" exact component={Watch}/>
			      <Route path="/iphone/:pid" component={Productpage}/>
			      <Route path="/" component={Four04}/> 
		      </Switch>
			  <Youtube />,
		      <Footer /> 
		    </div>
	    </Router>
    );
  }
  
}

export default App;
