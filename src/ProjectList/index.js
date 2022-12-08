import React from 'react';
import './ProjectList.css';


function ProjectList (props) {

    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}


export { ProjectList }