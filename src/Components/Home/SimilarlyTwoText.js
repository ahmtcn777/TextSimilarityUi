import axios from 'axios';
import { useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';

const SimilarlyTwoText = () => {
    const [textOne, setTextOne] = useState('');
    const [textTwo, setTextTwo] = useState('');

    function handleTextOne(value) {
        setTextOne(value);
    }

    function handleTextTwo(value) {
        setTextTwo(value);
    }

    function Find() {
        const postObject =  [
            {
                text: textOne
            }, {
                text: textTwo
            }
        ]
        axios.post('http://localhost:9090/text/calculateTwoText', postObject).then(response => {
            if(!response.data.successful){
                alert(response.data.message);
            } else{
                alert('Similarly is %' + response.data.data);
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col md={5}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>First Text</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => handleTextOne(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col md={{ span: 5, offset: 2 }}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Second Text</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => handleTextTwo(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={() => { Find() }}>Find Similary!</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SimilarlyTwoText;