import { Navbar, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Search App</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/addWriter">Add Writer</Nav.Link>
                <Nav.Link href="/addText">Add Text</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Menu;