import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Footer.css';

function MyFooter () {
    return (
        <footer class="myFooter">
            <Container class="content">
                <Row>
                    <Col class='col-1'>
                        <a><button class="contactme_button" role="button">Contact Me!</button></a>
                    </Col>
                    <Col class='col-2'>
                        <a class="icon" target="_blank" href="https://www.instagram.com/imorange.dev/"><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"></img></a>
                        <a class="icon" target="_blank" href="https://x.com/imorangedev"><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"></img></a>
                        <a class="icon" target="_blank" href="https://www.linkedin.com/in/imorangedev/"><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"></img></a>
                        <a class="icon" target="_blank" href="https://github.com/imorangedev"><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"></img></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};


export { MyFooter };