import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#top">Dessert Journal</a>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="#desserts">Desserts</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
