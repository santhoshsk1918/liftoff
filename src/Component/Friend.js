import React from 'react';
import {Card, Col} from "react-bootstrap";
const Friend = (prop) => {
    const {name, screen_name, profile_background_image_url} = prop.value
    return (
        <React.Fragment>
            <Col xs={6} md={4}>
                <Card>
                    <Card.Header>{name}</Card.Header>
                    <Card.Body><h6>@{screen_name}</h6></Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Friend;