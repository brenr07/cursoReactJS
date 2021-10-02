import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/Container'
import ItemListContainer from './ItemListContainer'
import Main from './Main'
import Footer from './Footer'

const App = () => {
    return ( 
        <div>
            <Header />
            <ItemListContainer />
            {/* <Container fluid>
                
            </Container> */}
        </div>
     );
}
 
export default App;