import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Footer.css';

function MyFooter () {
    return (
        <footer class="myFooter">
            <Container class="content">
                <Row>
                    <Col>
                        <a><button class="contactme_button" role="button">Contact Me!</button></a>
                    </Col>
                    <Col>
                        <a class="icon" target="_blank" href="https://www.instagram.com/imdiego.dev/"><img class="icon" src="https://portfoliodiegodev.s3.amazonaws.com/ig-logo.png"></img></a>
                        <a class="icon" target="_blank" href="https://twitter.com/imdiegodev"><img class="icon" src="https://portfoliodiegodev.s3.amazonaws.com/twitter-logo.png"></img></a>
                        <a class="icon" target="_blank" href="https://www.linkedin.com/in/imdiegodev/"><img class="icon" src="https://portfoliodiegodev.s3.amazonaws.com/linkedin-logo.png"></img></a>
                        <a class="icon" target="_blank" href="https://github.com/imdiegodev1"><img class="icon" src="https://portfoliodiegodev.s3.amazonaws.com/github-logo.png"></img></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


export { MyFooter };