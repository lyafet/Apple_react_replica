import React, {Component} from 'react'
import logo from '../../Assets/images/icons/logo-sm.png'
import NavLink from './NavLink'
import search from '../../Assets/images/icons/search-icon-sm.png'
import cart from '../../Assets/images/icons/cart-sm.png'

class Nav extends Component {
	
	render () {
		return (
				<div className="nav-wrapper fixed-top">
					<div className="container">
						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
							<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
								☰
							</button>
							<a className="navbar-brand mx-auto" href="/"><img src={logo}/></a>
			
							<div className="navbar-collapse collapse">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<NavLink linkUrl="/mac/" linkName="Mac"/>
									<NavLink linkUrl="/iphone/" linkName="iphone"/>
									<NavLink linkUrl="/ipad/" linkName="ipad"/>
									<NavLink linkUrl="/watch/" linkName="Watch"/>
									<NavLink linkUrl="/tv/" linkName="tv"/>
									<NavLink linkUrl="/Music/" linkName="Music"/>
									<NavLink linkUrl="/Support/" linkName="Support"/>
									<NavLink linkUrl="/search/" image={<img src={search} />}/>
									<NavLink linkUrl="/cart/" image={<img src={cart} />}/>
									
								</ul>
							</div>
						</nav>
					</div>
				</div>
		)
	}
}
export default Nav


