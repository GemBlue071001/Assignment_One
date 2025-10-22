import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavigationHeader = () => {

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Nav className="me-auto">
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/news">News</Nav.Link>
                    <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavigationHeader