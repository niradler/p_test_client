import React, {Component} from 'react';
import logo from '../../logo.png';
class Header extends Component {
    render() {
        return (
            <div className="navbar is-fluid">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img
                        src={logo}
                            alt="Bulma: a modern CSS framework based on Flexbox"
                            width="112"
                            height="28" /></a>
                        {/* <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
 
                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="field is-grouped">
                                 

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    }
}
export default Header;