import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './ProjectItem.css'

function ProjectItem (props) {

    return (
        <div class="ProjectItem">
            <a href={props.link} class="redirect-tag" target="_blank">
                
                <div class="name-n-button">
                    <Container>
                        <Row class="the-row">
                            <Col>
                                <p class="notes-name">{props.text}</p>
                                <h4 class="level">{props.level}</h4>
                            </Col>
                            <Col>
                                <button type="button" class="arrow">
                                    <img class="icon-next" src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-next-mintab-for-ios-becris-lineal-becris.png"></img>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                    
                    
                </div>
                
            </a>
        </div>
    )
}

export { ProjectItem };