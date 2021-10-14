import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidjet";

const {Item} = Nav
const CustomNav = () => {
    return ( 
        <Nav >
                <Item>
                    <Link class="text-decoration-none fw-bold text-secondary w-25 p-3" to="/Productos/">Productos</Link>
                </Item>
                <Item>
                    <Link class="text-decoration-none fw-bold text-secondary w-25 p-3" to="/Accesorios/">Accesorios</Link>
                </Item>
                <Item>
                    <Link class="text-decoration-none fw-bold text-secondary w-25 p-3" to="/Carrito"><CartWidget/></Link>
                </Item>
        </Nav>
     );
}
 
export default CustomNav;
