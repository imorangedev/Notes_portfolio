import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Message.css';


function Message () {

    return (
        <div>
            <Container class="message-container">
                <br></br>
                <Row>
                    <Col>
                        <div class="text-message">
                            <p>Hello!</p>
                            <p>These are some notes that I took in my process of learning and deepening in some technologies that I use in my day to day life or that I want to improve. In some cases I have used these notes to teach and share with the community.</p>
                        </div>
                    </Col>
                    <Col>
                        <div class="text-message"><p>This page is made with React and is part of my portfolio of projects. In this case you can also see how I implemented CSS and AWS to make it available on the web.</p></div>
                    </Col>
                </Row>
                <br></br>
            </Container>
        </div>
    );
};

export { Message };