import React from 'react';
import Header from './Header';
import {ItemListContainer} from './componentes/ItemListContainer';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { CartProvider } from './componentes/CartContext';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import {CartScreen} from './componentes/CartScreen'
import {Checkout} from './componentes/Checkout'
import Footer from'./Footer'



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

                    <Route exact path="/cart" component={CartScreen}/>

                    <Route exact path="/checkout" component={Checkout}/>


                </Switch>
            </Container>
            <Footer/>
        </BrowserRouter>
        </CartProvider> 
        </>
     );
}
 
export default App;