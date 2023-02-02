import React from 'react';

const PortfolioContext = React.createContext();

function PortfolioProvider(props){

    const projects = [
        {project_name: 'Pong', link: 'Pong link'},
        {project_name: 'ToDo App', link: 'ToDo App link'},
        {project_name: 'Voting Platform', link: 'Voting Platform link'},
        {project_name: 'E-commerce', link: 'E-commerce link'},
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