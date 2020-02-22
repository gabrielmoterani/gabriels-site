import React from 'react';
import Header from '../../components/Header/Header';

import { withNamespaces } from 'react-i18next';

import Hero from './components/Hero';
import Sections from './components/Sections';
import Subscribe from '../../components/Subscribe/Subscribe';

const Home = ({t}) => {
    return ( 
        <div id="header-holder">
            <div className="cloud-bg"></div>
            <Header/>
            <Hero t={t}/>
            <Sections t={t}/>
            <Subscribe/>
        </div>
     );
}
 
export default  withNamespaces()(Home);