import React from 'react';
import Header from './Header';
import ItemCount from './itemCount';
import ItemListContainer from './ItemListContainer';
import Promesas from './Promesas'


const App = () => {


    return ( 
        <div> 
            <Header />
            <ItemCount/>
            <ItemListContainer />
        </div>
     );
}
 
export default App;