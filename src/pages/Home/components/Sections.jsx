import React from 'react'


import Feature1Image from '../../../assets/images/feature1.png';
import Feature2Image from '../../../assets/images/feature2.png';
import Feature3Image from '../../../assets/images/feature4.png';

const Sections = ({t}) => {
    return ( 
        <>
        <div class="features container-fluid">
            <div class="container">
                <div class="row rtl-row">
                    <div class="col-sm-5">
                        <div class="img-holder">
                            <img src={Feature1Image} alt=""/>
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <div class="feature-info">
                            <div class="feature-title">{t('sections.about.title1')}</div>
                            <div class="feature-text">{t('sections.about.subtitle1')}</div>
                            <div class="feature-link"><a href="#" class="hbtn hbtn-default">{t('sections.about.button')}</a></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="img-holder">
                            <img src={Feature2Image} alt=""/>
                        </div>
                    </div>
                    <div class="col-sm-7 def-aligned">
                        <div class="feature-info">
                            <div class="feature-title">{t('sections.about.title2')}</div>
                            <div class="feature-text">{t('sections.about.subtitle2')}</div>
                            <div class="feature-link"><a href="#" class="hbtn hbtn-default">{t('sections.about.button')}</a></div>
                        </div>
                    </div>
                </div>
                <div class="row rtl-row">
                    <div class="col-sm-5">
                        <div class="img-holder">
                            <img src={Feature3Image} alt=""/>
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <div class="feature-info">
                            <div class="feature-title">{t('sections.about.title3')}</div>
                            <div class="feature-text">{t('sections.about.subtitle3')}</div>
                            <div class="feature-link"><a href="#" class="hbtn hbtn-default">{t('sections.about.button')}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="services" class="pricing container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="row-title">{t('sections.pricing.services')}</div>
                    </div>
                </div>
                <div class="row custom-padding">
                    <div class="col-sm-4 col-md-4">
                        <div class="pricing-box">
                            <div class="pricing-title">{t('sections.pricing.title1')}</div>
                            <div class="pricing-icon">
                                <div class="icon"></div>
                            </div>
                            <div class="pricing-details">
                                <ul>
                                    <li>{t('sections.pricing.1.1')}</li>
                                    <li>{t('sections.pricing.1.2')}</li>
                                    <li>{t('sections.pricing.1.3')}</li>
                                </ul>
                            </div>
                            <div class="pricing-button">
                                <a href="#">{t('sections.about.button')}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="pricing-box">
                            <div class="pricing-title">{t('sections.pricing.title2')}</div>
                            <div class="pricing-icon">
                                <div class="icon"></div>
                            </div>
                            <div class="pricing-details">
                                <ul>
                                    <li>{t('sections.pricing.2.1')}</li>
                                    <li>{t('sections.pricing.2.2')}</li>
                                    <li>{t('sections.pricing.2.3')}</li>
                                </ul>
                            </div>
                            <div class="pricing-button">
                                <a href="#">{t('sections.about.button')}</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="pricing-box">
                            <div class="pricing-title">{t('sections.pricing.title3')}</div>
                            <div class="pricing-icon">
                                <div class="icon"></div>
                            </div>
                            <div class="pricing-details">
                                <ul>
                                    <li>{t('sections.pricing.3.1')}</li>
                                    <li>{t('sections.pricing.3.2')}</li>
                                    <li>{t('sections.pricing.3.3')}</li>
                                </ul>
                            </div>
                            <div class="pricing-button">
                                <a href="#">{t('sections.about.button')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="posts" class="latest-news container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="row-title">
                        {t('sections.posts.title')}
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="main-btn-holder">
                            <a href="blog.html" class="hbtn hbtn-default">{t('sections.posts.more')}</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="post-box blue-bg">
                            <div class="post-img"></div>
                            <span class="badge badge-danger">Hot</span>
                            <div class="post-title">Discover our new website builder</div>
                            <div class="post-link"><a href="#">Learn more</a></div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="post-box grey-bg">
                            <div class="post-img"></div>
                            <span class="badge badge-info">Hot</span>
                            <div class="post-title">New Data center in Germany & USA</div>
                            <div class="post-link"><a href="#">Learn more</a></div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="post-box yellow-bg">
                            <div class="post-img"></div>
                            <span class="badge badge-dark">Hot</span>
                            <div class="post-title">Discover our newwebsite builder</div>
                            <div class="post-link"><a href="#">Learn more</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sections;