import { Row, Col, Form, Tab, Nav, Container } from 'react-bootstrap';
import SimilarlyTwoText from './SimilarlyTwoText';
import SearchText from './SearchText';

const Home = () => {
    return (
        <Container>
            <Form>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col md={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Find the writer from the text!</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Similarity of the two text!</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col smdm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <SearchText />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <SimilarlyTwoText />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Form>
        </Container>
    )
}

export default Home;