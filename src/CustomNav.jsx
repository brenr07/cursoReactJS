import Nav from "react-bootstrap/Nav"

const {Link, Item} = Nav
const CustomNav = () => {
    return ( 
        <Nav>
                <Item>
                    <Link href="/">Home</Link>
                </Item>
                <Item>
                    <Link href="/">Nosotros</Link>
                </Item>
                <Item>
                    <Link href="/">Productos</Link>
                </Item>
                <Item>
                    <Link href="/">Carrito</Link>
                </Item>
        </Nav>
     );
}
 
export default CustomNav;