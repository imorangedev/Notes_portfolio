import React from 'react';

const PortfolioContext = React.createContext();

function PortfolioProvider(props){

  const projects = [
        {project_name: 'Data Bases', url: 'https://drive.google.com/file/d/10MDw_llXH3bQwYK7jlJo7ahotsHSM6hX/view?usp=sharing', level: "Basic"},
        {project_name: 'POO with Python', url: 'https://drive.google.com/file/d/1pud53b66uLaWs0rKYCsoqygSnXZqtWLy/view?usp=sharing', level: "Intermediate"},
        {project_name: 'Java', url: 'https://drive.google.com/file/d/1vpWITquZStqoD-QkaxgsuSkrz3t5tOEY/view?usp=sharing', level: "Basic"},
        {project_name: 'FastAPI 1', url: 'https://drive.google.com/file/d/1e72w53UL7udKEjXqQ3TDJ7lvyY1VqcqF/view?usp=sharing', level: "Intermediate"},
        {project_name: 'Django 1', url: 'https://drive.google.com/file/d/1-NrgiLMRyXBIjHABq759OGGmGZL9QtWH/view', level: "Intermediate"},
        {project_name: 'SQL', url: 'https://drive.google.com/file/d/1DHNKuA1FnyRUByQTc_3gONyJ4C0gO1_8/view?usp=sharing', level: "Basic-Intermediate"},
        {project_name: 'Algorithms', url: 'https://drive.google.com/file/d/1k8rMBq-IdS7vR4ZB6zzJBeIxLntFtHBG/view?usp=sharing', level: "Basic"},
        {project_name: 'React', url: 'https://drive.google.com/file/d/1J_PYIAX7sAFN0wfAMlxccywxzkYOH4rK/view?usp=sharing', level: "Intermediate"},
      ];

      return (
        <PortfolioContext.Provider value={{
            projects,
        }}>
            {props.children}
        </PortfolioContext.Provider>
      );
}


export { PortfolioContext, PortfolioProvider}