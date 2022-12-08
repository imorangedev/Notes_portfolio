import React from 'react';
import { Header } from '../Header';
import { ProjectList } from '../ProjectList';
import { ProjectItem } from '../ProjectItem';
import { Footer } from '../Footer';


function AppUI (
    {
        projects,
    }
) {

    return (
    <React.Fragment>
        <Header/>
        <ProjectList>
            {projects.map(project => (
                <ProjectItem
                    text={project.project_name}
                    link={project.link}
                />
            ))}
        </ProjectList>
        <Footer/>
    </React.Fragment>
    );
}

export { AppUI };