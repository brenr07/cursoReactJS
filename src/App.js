import React from 'react';
import Header from './Header';
import ItemCount from './componentes/itemCount';
import ItemListContainer from './componentes/ItemListContainer';
import Promesas from './componentes/Promesas'
import { BrowserRouter,Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Detalle from './Detalle';



const App = () => {


    return ( 
        <BrowserRouter> 
            <Header />
            <Container fluid>
                <Switch>
                    <Route exact path="/" component={ItemListContainer}/>

                    <Route exact path="/Productos" component={ItemListContainer}/>

                    <Route exact path="/Productos/:id" component={Detalle}/>

                </Switch>
            </Container>
        </BrowserRouter>
     );
}
 
export default App;