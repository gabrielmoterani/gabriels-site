import React from 'react';

import {NavLink} from 'react-router-dom';

import { withNamespaces } from 'react-i18next';


const Header = ({t}) => {
    return ( 
        <nav id="nav" className="navbar navbar-full">
        <div className="container-fluid">
            <div className="container container-nav">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar-header">
                            <button aria-expanded="false" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="../../assets/images/logo.svg" alt=""/></a>
                        </div>
                        <div role="main" aria-expanded="false" className="navbar-collapse collapse navbar-collapse-centered" id="bs">
                            <ul className="nav navbar-nav navbar-nav-centered">
                                <li className="nav-item">
                                    <NavLink activeClassName="nav-NavLink active" to="/about" className="nav-NavLink">{t('header.about')}</NavLink>
                                </li>

                                <li className="nav-item">
                                <a  href="#services" className="nav-NavLink">{t('header.services')}</a >
                                </li>
                                <li className="nav-item">
                                    <a  href="#posts" className="nav-NavLink">{t('header.posts')}</a >
                                </li>
                                <li className="nav-item dropdown">
                                    <ul className="dropdown-menu">
                                        <li><NavLink activeClassName="dropdown-item active" to="/" className="dropdown-item">About</NavLink></li>
                                        <li><NavLink activeClassName="dropdown-item active" to="/" className="dropdown-item">Blog</NavLink></li>
                                        <li><NavLink activeClassName="dropdown-item active" to="/" className="dropdown-item">Privacy</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
     );
}
 
export default withNamespaces()(Header);