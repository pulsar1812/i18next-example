import React from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';

function App() {
  const [t, i18n] = useTranslation();

  const handleClick = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div className='App'>
      <nav
        style={{ width: '100%', padding: '2rem, 0', backgroundColor: 'gray' }}
      >
        <button onClick={() => handleClick('en-US')}>English</button>
        <button onClick={() => handleClick('zh-HK')}>Chinese</button>
      </nav>
      <p>{t('movie.quote')}</p>
    </div>
  );
}

export default App;
