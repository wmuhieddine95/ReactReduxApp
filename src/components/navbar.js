import React from "react"
import {Link, NavLink, withRouter} from 'react-router-dom'
const Navbar = () =>
{
    return(
        <nav className="nav-wrapper green darken-3">
           <div className="container">
            <a className="brandlogo"> Cafeteria 
            </a>
            <ul className="right">
                <li><Link to="home">Home</Link></li>
                <li><Link to="order">Order</Link></li>
                <li><Link to="stock">Stock</Link></li> 
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
           </div>
        </nav>
    )
}
export default withRouter(Navbar);
