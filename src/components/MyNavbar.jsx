import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNavbar = (props) => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">Action</Nav.Link>
                <Nav.Link href="#pricing">Adventure</Nav.Link>
                <Nav.Link href="#pricing">Horror</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyNavbar