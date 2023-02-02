import React from 'react';
import { AppUI } from './AppUI';
import { PortfolioProvider } from '../PortfolioContext';

//import './App.css';

const projects = [
  {project_name: 'Pong', link: 'Pong link'},
  {project_name: 'ToDo App', link: 'ToDo App link'},
  {project_name: 'Voting Platform', link: 'Voting Platform link'},
  {project_name: 'E-commerce', link: 'E-commerce link'},
]


function App() {
  return (
    <PortfolioProvider>
      <AppUI/>
    </PortfolioProvider>
  );
}

export default App;
