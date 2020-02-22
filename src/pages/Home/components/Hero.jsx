import React from 'react'

import BannerImage from '../../../assets/images/slide-img1.png'


const Hero = ({t}) => {
    return ( 
        <div id="top-content" className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="main-slider">
                            <div className="slide">
                                <div className="row rtl-row">
                                    <div className="col-sm-5">
                                        <div className="img-holder">
                                            <img src={BannerImage} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="b-text">{t('hero.title')}</div>
                                        <div className="m-text">{t('hero.subtitle')}</div>
                                        <a href="#services" className="hbtn hbtn-primary hbtn-lg">{t('hero.button')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;