import React from 'react';
import './ProjectList.css';


function ProjectList (props) {

    return (
        <section>
            <br></br>
            <div class="main-body">
                {props.children}
            </div>
            <br></br>
        </section>
    );
}


export { ProjectList }