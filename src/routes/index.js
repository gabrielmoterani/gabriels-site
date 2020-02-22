import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Links
import Home from '../pages/Home';

const Routes = () => {
    return (     
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </ BrowserRouter> 
    );
}
 
export default Routes;