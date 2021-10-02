import CustomNav from "./CustomNav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"

const {Brand,Collapse,Toggle} = Navbar
const Header = () => {
    return(
        <Navbar as="header" expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Brand>
                    <h1>LAS ALBARELLO</h1>
                </Brand>
                <Toggle />
                <Collapse>
                    <CustomNav />
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;