import React from 'react';
import Routes from './routes';

import './i18n';

//Styles
import './assets/styles/bootstrap.min.css';
import './assets/styles/fontawesome-all.min.css';
import './assets/styles/slick.css';
import './assets/styles/theme.css';
import './assets/styles/styles-modified.css';


//Components
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>  
      <Routes/>
      <Footer/>
    </>
  );
}

export default App;
