import React, { useState } from 'react';
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import axios from 'axios';

const AddWriter = () => {

    const [writerName, setWriterName] = useState("");
    const [writerSurname, setWriterSurname] = useState("");

    function handleWriterNameState(value) {
        setWriterName(value);
    }

    function handleWriterSurnameState(value) {
        setWriterSurname(value);
    }


    function AddWriter() {
        let postObject = {
            name: writerName,
            surname: writerSurname
        }
        axios.post('http://localhost:9090/writer/add', postObject).then(response => {
            if(!response.data.successful) {
                alert(response.data.message);
            } else{
                alert("Kayıt Başarılı");
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Writer Name" onChange={e => handleWriterNameState(e.target.value)} />
                            <Form.Control type="text" placeholder="Writer Surname" onChange={e => handleWriterSurnameState(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Button variant="primary" onClick={() => { AddWriter() }}>Add Writer</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AddWriter;