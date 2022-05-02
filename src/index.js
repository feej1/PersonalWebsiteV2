import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import BlackJackProj from './Routes/BlackJackProj/BlackJackProj';
import PersonalWebsiteProj from './Routes/PersonalWebisteProj/PersonalWebsiteProj';
import TradingBotProj from './Routes/TradingBotProj/TradingBotProj';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="BlackJack" element={<BlackJackProj/>} />
        <Route path="PortfolioSite" element={<PersonalWebsiteProj/>} />
        <Route path="TradingBot" element={<TradingBotProj/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

