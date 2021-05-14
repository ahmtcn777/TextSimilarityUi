import axios from 'axios';
import React, { useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

const SearchText = () => {

    const [text, setText] = useState("");

    function handleState(value) {
        setText(value);
    }

    function search() {
        const postObject = {
            text: text
        }
        axios.post('http://localhost:9090/text/findWriter', postObject).then(response => {
            if(!response.data.successful){
                alert(response.data.message);
            } else{
                alert(response.data.message);
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Search Text</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={e => handleState(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={() => { search() }}>Find Writer</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchText;