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

                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
 
                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="field is-grouped">
                                    <button className="button is-link is-outlined is-fullwidth" onClick={()=>this.props.showTop10()}>
                                         { !this.props.showTop10Status ? "Show Top 10 IPs": "Hide Top 10 IPs"}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    }
}
export default Header;