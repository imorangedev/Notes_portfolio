import React from 'react';
import { PortfolioContext } from '../PortfolioContext';
import { MyHeader } from '../MyHeader';
import { ProjectList } from '../ProjectList';
import { ProjectItem } from '../ProjectItem';
import { MyFooter } from '../MyFooter';
import { Message } from '../Message';

function AppUI () {

    const {
        projects
    } = React.useContext(PortfolioContext)


    return (
    <React.Fragment>
        <MyHeader/>
        <Message/>
        <ProjectList>
            {projects.map( project => (
                <ProjectItem
                    text = {project.project_name}
                    link = {project.url}
                    level = {project.level}
                />
            ))}
        </ProjectList>
        <MyFooter/>
    </React.Fragment>
    );
}

export { AppUI };