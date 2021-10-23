import React from 'react';
import Header from './Header';
import {ItemListContainer} from './componentes/ItemListContainer';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { CartProvider } from './componentes/CartContext';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import {CartScreen} from './componentes/CartScreen'



function App() {

    return (
        <>
        <CartProvider> 
        <BrowserRouter> 
            <Header />
            <Container fluid>
                <Switch>
                    <Route exact path="/" component={ItemListContainer}/>

                    <Route exact path="/productos/:categoryId" component={ItemListContainer}/>

                    <Route exact path="/detail/:itemId" component={ItemDetailContainer}/>

                    <Route exact path="/Contacto"><h1>Contacto</h1></Route>

                    <Route exact path="/Carrito" component={CartScreen}/>


                </Switch>
            </Container>
        </BrowserRouter>
        </CartProvider> 
        </>
     );
}
 
export default App;