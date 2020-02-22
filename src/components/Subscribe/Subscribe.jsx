import React from 'react';
import { withNamespaces } from 'react-i18next';


const Subscribe = ({t}) => {
    return (
        <div className="domain-search-holder container-fluid">
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lgmd-4"><div className="title">{t('sections.subscribe.title')}</div></div>
                        <div className="col-sm-8 col-md-5 col-lgmd-6">
                            <input className="domain-input" type="text" placeholder={t('sections.subscribe.type')}/> 
                        </div>
                        <div className="col-sm-4 col-md-3 col-lgmd-2">
                            <button type="submit">{t('sections.subscribe.button')}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      );
}
 
export default withNamespaces()(Subscribe);