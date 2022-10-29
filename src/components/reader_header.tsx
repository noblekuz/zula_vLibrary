import * as React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';


interface IReaderHeadProps {
}

const ReaderHead: React.FunctionComponent<IReaderHeadProps> = (props) => {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
       <Container>
        <Navbar.Brand href="#home">Zula Desk</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Toolbox" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Insert Bookmark</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Remove Bookmark</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Make Screenshot</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Download text as .txt</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Help" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Shortcut Keys</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Documentation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Zula Support Team</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
                Hi, User
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  ) ;
};

export default ReaderHead;
