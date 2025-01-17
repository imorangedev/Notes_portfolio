import React from 'react';
import './Header.css';

function MyHeader () {
    return (
        <header class="myheader">
            <a class="logo-link" href='https://github.com/imorangedev' target="_blank">
                <span><img class="main-logo" src="https://portfoliodiegodev.s3.us-east-1.amazonaws.com/assets/img/logo.png"></img></span>
            </a>
            <nav class="nav-links">
                <a class='nav-links' href='https://drive.google.com/file/d/1zgyzYY6NTQKaAMUSzsH7MhCS1MMKyo9h/view?usp=sharing' target="_blank">CV</a>
            </nav>
        </header>
    );
}
// <a class='nav-links' href='https://imdiego.dev/' target="_blank">Personal webpage</a>

export { MyHeader };