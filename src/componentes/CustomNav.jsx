import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidjet";
import '../estilo.css'

const CustomNav = () => {
    return ( 
        <Nav fill variant="tabs" defaultActiveKey="/home">

                <NavLink className='text-link' activeClassName={'activeLink'} exact to="/productos/carteras">Carteras</NavLink>
                <NavLink className='text-link' activeClassName={'activeLink'} exact to="/productos/mochilas">Mochilas</NavLink>
                <NavLink className='text-link' activeClassName={'activeLink'} exact to="/productos/bandoleras">Bandoleras</NavLink>
                <NavLink className='text-link' activeClassName={'activeLink'} exact to="/productos/accesorios">Accesorios</NavLink>
                <NavLink  className='text-link' activeClassName={'activeLink'} exact to="/cart"><CartWidget/></NavLink>
        
        </Nav>
     );
}
 
export default CustomNav;
