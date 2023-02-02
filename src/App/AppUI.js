import React from 'react';
import { PortfolioContext } from '../PortfolioContext';
import { MyHeader } from '../MyHeader';
import { ProjectList } from '../ProjectList';
import { ProjectItem } from '../ProjectItem';
import { MyFooter } from '../MyFooter';


function AppUI () {

    const {
        projects
    } = React.useContext(PortfolioContext)

    return (
    <React.Fragment>
        <MyHeader/>
        <p>Hola mundo!</p>
        <MyFooter/>
    </React.Fragment>
    );
}

export { AppUI };