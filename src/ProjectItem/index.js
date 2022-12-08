import React from 'react';
import './ProjectItem.css'

function ProjectItem (props) {

    <li className='ProjectItem'>
        <h1>{props.text}</h1>
        <a href={props.link}>Link</a>
    </li>
}

export { ProjectItem };