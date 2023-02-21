import React from 'react';
import './Header.css';

function MyHeader () {
    return (
        <header class="myheader">
            <a class="logo-link" href='https://imdiego.dev/' target="_blank">
                <span><img class="main-logo" src="https://portfoliodiegodev.s3.amazonaws.com/logov4.png"></img></span>
            </a>
            <a class='nav-links' href='https://drive.google.com/file/d/13IXwhFHLCUlPl21ZZ1uEhpUUADsMIC_7/view' target="_blank">CV</a>
            <a class='nav-links' href='https://imdiego.dev/' target="_blank">Personal webpage</a>
        </header>
    );
}


export { MyHeader };