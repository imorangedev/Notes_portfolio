import React from 'react';
import { AppUI } from './AppUI';

//import './App.css';

const projects = [
  {project_name: 'Pong', link: 'Pong link'},
  {project_name: 'ToDo App', link: 'ToDo App link'},
  {project_name: 'Voting Platform', link: 'Voting Platform link'},
  {project_name: 'E-commerce', link: 'E-commerce link'},
]


function App() {
  return (
    <AppUI 
      projects={projects}
    />
  );
}

export default App;
