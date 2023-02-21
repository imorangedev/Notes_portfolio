import React from 'react';
import { AppUI } from './AppUI';
import { PortfolioProvider } from '../PortfolioContext';

//import './App.css';


function App() {
  return (
    <PortfolioProvider>
      <AppUI/>
    </PortfolioProvider>
  );
}

export default App;
