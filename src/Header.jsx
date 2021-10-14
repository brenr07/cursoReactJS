import CustomNav from "./componentes/CustomNav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png"


const {Brand,Collapse,Toggle} = Navbar
const Header = () => {
    return(
        <Navbar as="header" expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Brand>
                    <Link to="/">
                        <img src={Logo} alt="logo_img" width="200px" />
                    </Link>
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