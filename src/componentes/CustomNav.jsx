import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidjet";

const {Item} = Nav
const CustomNav = () => {
    return ( 
        <Nav >
                {/* <Item>
                    <Link class="text-decoration-none fw-bold text-secondary w-25 p-3" to="/Productos/">Productos</Link>
                </Item>
                <Item>
                    <Link class="text-decoration-none fw-bold text-secondary w-25 p-3" to="/Accesorios/">Accesorios</Link>
                </Item>
                <Item>
                    <Link class="text-decoration-none fw-bold text-secondary w-25 p-3" to="/Carrito"><CartWidget/></Link>
                </Item> */}
                <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/carteras">Carteras</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/productos/accesorios">Accesorios</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
                <NavLink activeClassName={'activeLink'} exact to="/carrito"><CartWidget/></NavLink>
        
        </Nav>
     );
}
 
export default CustomNav;
