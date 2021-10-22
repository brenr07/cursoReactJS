import React from 'react';
import Header from './Header';
// import ItemCount from './componentes/itemCount';
import ItemListContainer from './componentes/ItemListContainer';
import Promesas from './componentes/Promesas'
import { BrowserRouter,Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Detalle from './Detalle';
import { CartProvider } from './CartContext';
import Carrito from './Carrito';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';


const App = () => {


    return (
        <CartProvider>
        <BrowserRouter> 
            <Header />
            <Container fluid>
                <Switch>
                    <Route exact path="/" component={ItemListContainer}/>

                    <Route exact path="/Productos/categoryId" component={ItemListContainer}/>

                    <Route exact path="/Productos/:itemId" component={ItemDetailContainer}/>

                    <Route exact path="/Contacto"><h1>Contacto</h1></Route>

                    <Route exact path="/Carrito" component={Carrito}/>

                    <Route path="*" > <Redirect to="/"/> </Route>

                </Switch>
            </Container>
        </BrowserRouter>
        </CartProvider> 
     );
}
 
export default App;