import React from 'react';
import './Header.css';

function MyHeader () {
    return (
        <header class="myheader">
            <a>
                <img class="header_img" src="https://portfoliodiegodev.s3.amazonaws.com/logov2.jpg"></img>
                <span class="main-title"> Diego's Portfolio</span>
            </a>
            <a class='nav-links' href='https://drive.google.com/file/d/13IXwhFHLCUlPl21ZZ1uEhpUUADsMIC_7/view' target="_blank">CV</a>
            <a class='nav-links' href='https://imdiego.dev/' target="_blank">Personal webpage</a>
            
            
        </header>
    );
}


export { MyHeader };