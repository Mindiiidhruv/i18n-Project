import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { HOME, ABOUT, CONTACT } from './RouteName';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';


const Routing = () =>{
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

return(
<Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('es')}>ES</button>
          <p>{t('language')}:</p>
          <Link to="/">{t('home')}</Link> |{' '}
          <Link to="/about">{t('about')}</Link> |{' '}
          <Link to="/contact">{t('contact')}</Link>
        </nav>

        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={CONTACT} element={<Contact />} />
        </Routes>
      </div>
    </Router>
);
}

export default Routing;