import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import axios from 'axios';

const AddText = () => {

    const [text, setText] = useState("");
    const [writerList, setwriterList] = useState([]);
    const [selectedWriter, setSelectedWriter] = useState(-1);

    function handleTextState(value) {
        setText(value);
    }

    useEffect(() => {
        axios.get('http://localhost:9090/writer/getAll').then(response => {
            if (!response.data.successful) {
                alert("Writers couldnt get.")
            } else {
                setwriterList(response.data.data)
            }
        })
    }, []);

    function handleSelectedWriter(value) {
        setSelectedWriter(value);
    }

    function AddText() {
        const postObject = {
            writerId: selectedWriter,
            text: text
        }
        axios.post('http://localhost:9090/text/add', postObject).then(response => {
            if (!response.data.successful) {
                alert("Kayıt Başarısız");
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
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} onChange={e => handleTextState(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Choose Writer</Form.Label>
                            <Form.Control as="select" onChange={e => handleSelectedWriter(e.target.value)} >
                                <option value='-1'>Choose Writer</option>
                                {
                                    writerList.map((writer, index) => {
                                        return (
                                            <option key={index} value={writer.id}>{writer.name + ' ' + writer.surname}</option>
                                        )
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Button variant="primary" onClick={() => { AddText() }}>Add Text</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AddText;